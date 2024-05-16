import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import styles from "./index.module.scss";
import addFile from "/icons/addFile.svg";
import {useDropzone} from "react-dropzone";

type Props = {
    forwardedRef?: any;
    className?: string
    placeholder?: string
}

const InputFiles = ({forwardedRef, className, placeholder}: Props) => {

    const {t} = useTranslation();
    const [fileLength, $fileLength] = useState(0);

    const onDrop = useCallback((acceptedFiles: any) => {
        $fileLength(acceptedFiles.length);
        forwardedRef.current = acceptedFiles;
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return <div {...getRootProps()}
                className={`${className} ${styles.inputBox} flex flex-wrap relative text-sm z-30 !p-0`}
    >
        {/*<input*/}
        {/*    className="opacity-0 absolute inset-0"*/}
        {/*    // ref={forwardedRef}*/}
        {/*    {...getInputProps()}*/}
        {/*    multiple*/}
        {/*    type="file"*/}
        {/*    onChange={onDrop}*/}
        {/*/>*/}
        <input
            onChange={onDrop}
            {...getInputProps()}
            multiple
            className="h-full w-full !flex opacity-0 absolute inset-0"
        />
        <div
            className="w-full flex whitespace-pre-wrap overflow-ellipsis pr-10 pt-1 pl-1 -z-10 absolute top-1/2 text-xs lg:text-base text-textGray -translate-y-1/2">
            {!!fileLength ? `${t("selected_files")} ${fileLength}` : placeholder}
        </div>
        <img
            src={addFile}
            alt={"add-file"}
            className="absolute right-2 top-1/2 -translate-y-1/2"
        />
    </div>

}
export default InputFiles;