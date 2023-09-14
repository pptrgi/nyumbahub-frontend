import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { toast } from "react-toastify";

// CREATEs user account
export const registerUserAC = createAsyncThunk(
  "user/registerUser",
  async (userDetails, thunkAPI) => {
    try {
      return await userService.registerUser(userDetails);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// POSTs the user's signin credentials
export const signinUserAC = createAsyncThunk(
  "user/signinUser",
  async (userDetails, thunkAPI) => {
    try {
      return await userService.signinUser(userDetails);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// GETs the user's wishlist items
export const getUserWishlistAC = createAsyncThunk(
  "user/wishlist",
  async (firstArg, thunkAPI) => {
    try {
      return await userService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// UPDATEs the refreshToken value to empty
export const signOutUserAC = createAsyncThunk(
  "user/signOut",
  async (firstArg, thunkAPI) => {
    try {
      return await userService.signOutUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// UPDATEs the user's profile details
export const editUserProfileAC = createAsyncThunk(
  "user/editProfile",
  async (userInfo, thunkAPI) => {
    try {
      return await userService.editUserProfile(userInfo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// UPDATEs the user's password
export const changePasswordAC = createAsyncThunk(
  "user/changePassword",
  async (userInfo, thunkAPI) => {
    try {
      return await userService.changePassword(userInfo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
          toast.success("Congratulations! Account registered successfully");
        }
      })
      .addCase(registerUserAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
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

          toast.success("You have signed in to your account");
        }
      })
      .addCase(signinUserAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Couldn't sign you in. Please check your credentials");
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
          toast.error("Didn't find your wishlist items? Refresh the page");
        }
      })
      .addCase(signOutUserAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutUserAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {};
        if (state.isSuccess === true) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenTimestamp");
          localStorage.removeItem("persist:root");

          toast.info("You Signed out. See you later");
        }
      })
      .addCase(signOutUserAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(editUserProfileAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUserProfileAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          toast.success("Your profile has been updated");
        }
      })
      .addCase(editUserProfileAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Failed to update your profile. Re-submit");
        }
      })
      .addCase(changePasswordAC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePasswordAC.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success("Successful. Use your new password on the next logon");
        }
      })
      .addCase(changePasswordAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Failed to change password. Try again");
        }
      });
  },
});

export default userSlice.reducer;
