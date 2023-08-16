import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "./categoryService";

export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async (categoryId, thunkAPI) => {
    try {
      return await categoryService.getOneCategory(categoryId);
    } catch (error) {
      return error;
    }
  }
);
export const getFeaturedCategory = createAsyncThunk(
  "category/getFeaturedCategory",
  async (thunkAPI) => {
    try {
      return await categoryService.getFeaturedCategory();
    } catch (error) {
      return error;
    }
  }
);
export const getNewListingCategory = createAsyncThunk(
  "category/getNewListingCategory",
  async (thunkAPI) => {
    try {
      return await categoryService.getNewListingCategory();
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  featuredCategory: {},
  newListingCategory: {},
  category: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeaturedCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.featuredCategory = action.payload;
      })
      .addCase(getFeaturedCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getNewListingCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewListingCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.newListingCategory = action.payload;
      })
      .addCase(getNewListingCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOneCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.category = action.payload;
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default categorySlice.reducer;
