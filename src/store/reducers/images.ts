import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import { ImageType } from "src/utils/types";

interface State {
  images: ImageType[];
}

const initialState: State = {
  images: [],
};

export const imageReducer = createSlice({
  name: "image_upload",
  initialState,
  reducers: {
    uploadImage: (state, { payload }: PayloadAction<ImageType>) => {
      state.images.push(payload);
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.images = state.images.filter((_, idx) => idx !== action.payload);
    },
    clearImages: (state) => {
      state.images = [];
    }
  },
});

export const imageSelector = (state: RootState) => state.images.images;

export const { uploadImage, removeImage,clearImages } = imageReducer.actions;
export default imageReducer.reducer;
