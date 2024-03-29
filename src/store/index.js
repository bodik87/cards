import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";

export const store = configureStore({
  reducer: {
    categoryList: categoryReducer,
  },
  // присобачить новый редьюсерб на кадое изменение через setTimeout задержка
});
