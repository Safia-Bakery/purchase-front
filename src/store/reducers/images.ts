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
  },
});

export const imageSelector = (state: RootState) => state.images.images;

export const { uploadImage, removeImage } = imageReducer.actions;
export default imageReducer.reducer;
