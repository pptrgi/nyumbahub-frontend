import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { toast } from "react-toastify";

export const registerUserAC = createAsyncThunk(
  "user/registerUser",
  async (userDetails) => {
    try {
      return await userService.registerUser(userDetails);
    } catch (error) {
      return error;
    }
  }
);
export const signinUserAC = createAsyncThunk(
  "user/signinUser",
  async (userDetails) => {
    try {
      return await userService.signinUser(userDetails);
    } catch (error) {
      return error;
    }
  }
);
export const getUserWishlistAC = createAsyncThunk("user/wishlist", async () => {
  try {
    return await userService.getUserWishlist();
  } catch (error) {
    return error;
  }
});

const initialState = {
  userWishlist: [],
  user: {},
  registeredUser: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.registeredUser = action.payload;
        if (state.isSuccess === true) {
          toast.success("Account registered successfully");
        }
      })
      .addCase(registerUserAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Please try registering again");
        }
      })
      .addCase(signinUserAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUserAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.accessToken);
          localStorage.setItem("tokenTimestamp", new Date().getTime());
          toast.success("Signed in successfully");
        }
      })
      .addCase(signinUserAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something went wrong signing in. Try again");
        }
      })
      .addCase(getUserWishlistAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserWishlistAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userWishlist = action.payload;
      })
      .addCase(getUserWishlistAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something went wrong fetching wishlist");
        }
      });
  },
});

export default userSlice.reducer;
