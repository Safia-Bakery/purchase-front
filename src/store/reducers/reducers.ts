import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import language from "./language";
import images from "./images";

export default combineReducers({
  auth,
  language,
  images,
});
