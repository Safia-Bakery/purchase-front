import { useAppDispatch, useAppSelector } from "src/store/rootConfig.ts";
import Modal from "src/components/Modal";
import { useCallback, useMemo, useState } from "react";
import cross from "/icons/crossBlack.svg";
import { useDropzone } from "react-dropzone";
import drag_img from "/icons/add-folder.svg";
import { useTranslation } from "react-i18next";
import {
  imageSelector,
  removeImage,
  uploadImage,
} from "src/store/reducers/images.ts";
import {
  FileState,
  FileUploadRes,
  ImageType,
  ModalTypes,
} from "src/utils/types.ts";
import fileUploadMutation from "src/hooks/mutations/fileUpload";
import useQueryString from "src/hooks/useQueryString";
import { useRemoveParams } from "src/hooks/useCustomNavigate";
import { baseURL } from "src/api/baseApi";
import Loading from "../Loader";
import removeFileMutation from "src/hooks/mutations/removeFile";
interface Props {
  openModal: () => void;
  keyObj: ModalTypes;
}

const UploadImages = ({ openModal, keyObj: key }: Props) => {
  const { t } = useTranslation();
  const modal = useQueryString("modal");
  const dispatch = useAppDispatch();
  const removeParams = useRemoveParams();
  const images = useAppSelector(imageSelector);
  const { mutate, isPending } = fileUploadMutation();
  const { mutate: removeFile } = removeFileMutation();
  const stateKey = ModalTypes[key] as keyof FileState;

  const removeImages = (value: number) => () => {
    dispatch(removeImage({ key: stateKey, value }));
    removeFile({ id: value });
  };

  const onDrop = useCallback(
    (files: any) => {
      if (files) {
        mutate(
          { files },
          {
            onSuccess: (data: FileUploadRes) => {
              dispatch(
                uploadImage({
                  key: ModalTypes[Number(modal)] as keyof FileState,
                  value: data.files,
                })
              );
              closeModal();
            },
          }
        );
      }
    },
    [modal]
  );

  const renderImages = useMemo(() => {
    return !images[stateKey]?.length ? (
      <div className={"w-14 h-14 rounded-full overflow-hidden cursor-pointer"}>
        <img
          src={"/images/safia-logo.png"}
          className={"w-full h-full opacity-40"}
          alt={"upload-image"}
        />
      </div>
    ) : (
      images[stateKey]?.map((item) => (
        <div className={"w-14 h-14 cursor-pointer relative"} key={item.id}>
          <div
            onClick={removeImages(item.id)}
            className={
              "absolute -top-1 -right-1 border border-black rounded-full p-1 w-max z-10"
            }
          >
            <img src={cross} className={"w-3 h-3"} alt={"close"} />
          </div>
          <img
            src={`${baseURL}/${item.url}`}
            className={"w-full h-full rounded-full"}
            alt={`${item.url}`}
          />
        </div>
      ))
    );
  }, [images, stateKey]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const closeModal = () => removeParams(["modal"]);

  return (
    <div className={"flex items-center w-full md:gap-3 gap-1 flex-wrap py-3"}>
      {isPending && <Loading />}
      {renderImages}
      <div
        onClick={openModal}
        className={
          "w-14 h-14 rounded-full overflow-hidden cursor-pointer text-3xl font-bold flex justify-center items-center bg-gray-300"
        }
      >
        +
      </div>

      <Modal
        isOpen={!!modal?.toString()}
        onClose={closeModal}
        className={"!max-w-3xl flex items-center justify-center"}
      >
        <div className={"relative h-full max-w-3xl w-full flex flex-1"}>
          <div
            onClick={closeModal}
            className={
              "absolute top-4 right-4 z-10 border border-black rounded-full bg-white p-2 h-max"
            }
          >
            <img src={cross} alt={"close-modal"} />
          </div>

          <div className={"h-full w-full"}>
            <div
              {...getRootProps()}
              className="flex h-full w-full flex-1 bg-white rounded-xl border border-borderColor p-4 items-center justify-center relative"
            >
              <input
                onChange={onDrop}
                {...getInputProps()}
                multiple
                accept="image/*"
                className="h-full w-full !flex opacity-0 absolute inset-0"
              />
              {isDragActive ? (
                <div className="h-full w-full items-center justify-center flex bg-green-400">
                  <img src={drag_img} alt="dragFile" className="w-40 h-40" />
                </div>
              ) : (
                <div className="flex h-full w-full justify-center items-center border border-borderColor text-[#00000063]">
                  {t("drag_files")}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UploadImages;
