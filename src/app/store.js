import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../reduxFeatures/properties/propertySlice";
import categoryReducer from "../reduxFeatures/categories/categorySlice";
import typeReducer from "../reduxFeatures/types/typeSlice";
import userReducer from "../reduxFeatures/users/userSlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    category: categoryReducer,
    type: typeReducer,
    user: userReducer,
  },
});
