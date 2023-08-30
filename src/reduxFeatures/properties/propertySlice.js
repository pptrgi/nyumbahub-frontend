import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { propertyService } from "./propertyService";
import { toast } from "react-toastify";

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (data, thunkAPI) => {
    try {
      return await propertyService.getAllProperties(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOnePropertyAC = createAsyncThunk(
  "property/getOneProperty",
  async (propertyId, thunkAPI) => {
    try {
      return await propertyService.getOneProperty(propertyId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlistAC = createAsyncThunk(
  "property/addToWishlist",
  async (propertyId, thunkAPI) => {
    try {
      return await propertyService.addPropertyToWishlist(propertyId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAReviewAC = createAsyncThunk(
  "property/addAReview",
  async (reviewData, thunkAPI) => {
    try {
      return await propertyService.addAReview(reviewData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  reviews: [],
  compareProperties: [],
  wishlisted: {},
  properties: [],
  property: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const existingProperty = state.compareProperties.find(
        (property) => property._id == action.payload._id
      );
      if (existingProperty) {
        state.compareProperties.pop(action.payload);
        toast.info("Property removed from compare");
      } else {
        if (state.compareProperties.length >= 3) {
          toast.error("Maximum number of properties to compare is 3");
        } else {
          state.compareProperties.push(action.payload);
          toast.success("Property added to compare");
        }
      }
    },
    removeFromCompare: (state, action) => {
      state.compareProperties = state.compareProperties.filter(
        (property) => property._id !== action.payload._id
      );
    },
    // resetCompare: (state) => {
    //   state.compareProperties = [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.property = {};
        state.properties = action.payload;
      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getOnePropertyAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOnePropertyAC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.property = action.payload;
      })
      .addCase(getOnePropertyAC.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(addToWishlistAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlistAC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlisted = action.payload;
        if (state.isSuccess === true) {
          toast.success("Property added to the wishlist");
        }
      })
      .addCase(addToWishlistAC.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(addAReviewAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAReviewAC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reviews = action.payload;
        if (state.isSuccess === true) {
          toast.success("Review submitted successfully");
        }
      })
      .addCase(addAReviewAC.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});

export const { addToCompare, removeFromCompare } = propertySlice.actions;
export default propertySlice.reducer;
