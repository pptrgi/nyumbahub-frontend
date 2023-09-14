import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertyReducer from "../reduxFeatures/properties/propertySlice";
import categoryReducer from "../reduxFeatures/categories/categorySlice";
import typeReducer from "../reduxFeatures/types/typeSlice";
import userReducer from "../reduxFeatures/users/userSlice";

// Only persisting the user's reducer. Add it to the whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

// create the root reducer that combines all 4 reducers
const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  property: propertyReducer,
  type: typeReducer,
});

// persist the whitelisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// create store persistor and export it
export const persistor = persistStore(store);
