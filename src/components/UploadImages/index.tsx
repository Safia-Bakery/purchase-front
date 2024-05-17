import { useAppDispatch, useAppSelector } from "src/store/rootConfig.ts";
import Modal from "src/components/Modal";
import { useCallback, useState } from "react";
import cross from "/icons/crossBlack.svg";
import { useDropzone } from "react-dropzone";
import drag_img from "/icons/add-folder.svg";
import { useTranslation } from "react-i18next";
import {
  imageSelector,
  removeImage,
  uploadImage,
} from "src/store/reducers/images.ts";
import { ImageType } from "src/utils/types.ts";

const UploadImages = () => {
  const { t } = useTranslation();
  const [modal, $modal] = useState(false);
  const dispatch = useAppDispatch();
  const images = useAppSelector(imageSelector);

  const onDrop = useCallback((files: any) => {
    if (files) {
      Array.from(files).forEach((file: any) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const url = e.target?.result as string;
          const image: ImageType = {
            name: file.name,
            content: file,
            url: url,
          };
          dispatch(uploadImage(image));
        };
        reader.readAsDataURL(file);
      });
    }

    toggleModal();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const toggleModal = () => $modal((prev) => !prev);

  return (
    <div className={"flex items-center w-full md:gap-3 gap-1 flex-wrap py-3"}>
      {!images.length ? (
        <div
          className={"w-14 h-14 rounded-full overflow-hidden cursor-pointer"}
        >
          <img
            src={"/images/safia-logo.png"}
            className={"w-full h-full opacity-40"}
            alt={"upload-image"}
          />
        </div>
      ) : (
        images.map((item, idx) => (
          <div
            className={"w-14 h-14 cursor-pointer relative"}
            key={item.name + idx}
          >
            <div
              onClick={() => dispatch(removeImage(idx))}
              className={
                "absolute -top-1 -right-1 border border-black rounded-full p-1 w-max z-10"
              }
            >
              <img src={cross} className={"w-3 h-3"} alt={"close"} />
            </div>
            <img
              src={item.url}
              className={"w-full h-full rounded-full"}
              alt={`${item.name}`}
            />
          </div>
        ))
      )}

      <div
        onClick={toggleModal}
        className={
          "w-14 h-14 rounded-full overflow-hidden cursor-pointer text-3xl font-bold flex justify-center items-center bg-gray-300"
        }
      >
        +
      </div>

      <Modal
        isOpen={modal}
        onClose={toggleModal}
        className={"!max-w-3xl flex items-center justify-center"}
      >
        <div className={"relative h-full max-w-3xl w-full flex flex-1"}>
          <div
            onClick={toggleModal}
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
