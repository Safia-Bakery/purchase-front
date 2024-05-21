import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import { FileState, FileUploadRes } from "src/utils/types";

const initialState: FileState = {
  product_images: undefined,
  brochures: undefined,
  sertificates: undefined,
};

export const imageReducer = createSlice({
  name: "image_upload",
  initialState,
  reducers: {
    uploadImage: (
      state,
      {
        payload,
      }: PayloadAction<{ key: keyof FileState; value: FileUploadRes["files"] }>
    ) => {
      state[payload.key]! = payload.value;
    },
    removeImage: (
      state,
      { payload }: PayloadAction<{ key: keyof FileState; value: number }>
    ) => {
      if (!!state[payload.key]?.length) {
        const filtered: FileUploadRes["files"] = state[payload.key]!.filter(
          (item) => item.id !== payload.value
        );
        state[payload.key] = filtered;
      }
    },
    clearImages: (state) => {
      state = initialState;
    },
  },
});

export const imageSelector = (state: RootState) => state.images;

export const { uploadImage, removeImage, clearImages } = imageReducer.actions;
export default imageReducer.reducer;
