import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { propertyService } from "./propertyService";
import { toast } from "react-toastify";

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (data, thunkAPI) => {
    try {
      return await propertyService.getAllProperties(data);
    } catch (error) {
      return error;
    }
  }
);
export const getOnePropertyAC = createAsyncThunk(
  "property/getOneProperty",
  async (propertyId, thunkAPI) => {
    try {
      return await propertyService.getOneProperty(propertyId);
    } catch (error) {
      return error;
    }
  }
);

export const addToWishlistAC = createAsyncThunk(
  "property/addToWishlist",
  async (propertyId) => {
    try {
      return await propertyService.addPropertyToWishlist(propertyId);
    } catch (error) {
      return error;
    }
  }
);

export const addAReviewAC = createAsyncThunk(
  "property/addAReview",
  async (propertyId, reviewData) => {
    try {
      return await propertyService.addAReview(propertyId, reviewData);
    } catch (error) {
      return error;
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
      } else {
        if (state.compareProperties.length >= 3) {
          toast.info("Maximum number of properties to compare is 3");
        } else {
          state.compareProperties.push(action.payload);
          console.log(state.compareProperties);
        }
      }
    },
    removeFromCompare: (state, action) => {
      state.compareProperties = state.compareProperties.filter(
        (property) => property._id !== action.payload._id
      );
    },
    // resetCompare: (state) => {
    //   state.compareProperties = state.compareProperties = [];
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
          toast.error("Problem adding item to the wishlist");
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
          toast.error("Problem submitting review");
        }
      });
  },
});

export const { addToCompare, removeFromCompare } = propertySlice.actions;
export default propertySlice.reducer;
