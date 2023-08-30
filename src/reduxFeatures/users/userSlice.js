import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { toast } from "react-toastify";

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
          toast.success("Account registered successfully");
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
          toast.error(action.error);
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
          toast.error(action.error);
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
          toast.info("Signed Out successfully");
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
          toast.error(action.error);
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
          toast.info("Use your new password on the next logon");
        }
      })
      .addCase(changePasswordAC.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});

export default userSlice.reducer;
