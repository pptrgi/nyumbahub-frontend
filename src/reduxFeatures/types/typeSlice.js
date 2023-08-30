import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { typeService } from "./typeService";

export const getOneType = createAsyncThunk(
  "type/getOneType",
  async (typeId, thunkAPI) => {
    try {
      return await typeService.getOneType(typeId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  type: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.type = action.payload;
      })
      .addCase(getOneType.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default typeSlice.reducer;
