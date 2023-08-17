import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import { signinUserAC } from "../reduxFeatures/users/userSlice";
import * as yup from "yup";
import { useFormik } from "formik";

const signinSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address field is required"),
  password: yup.string().required("Password field is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  console.log("user state", userState);
  // console.log(userState.user.user);
  // console.log(userState.user.accessToken);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      dispatch(signinUserAC(values));
      if (userState.isSuccess === true) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    },
  });
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Sign In"} />
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="w-[300px] bg-white rounded-sm sm:w-[400px] md:w-[500px]">
          <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] py-[2rem] sm:col-span-3 w-full">
            <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
              Sign In to your Account
            </h3>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center text-textColor  w-full sm:w-3/4"
            >
              <div className="flex flex-col space-y-[0.5rem] w-full">
                <AuthInputTemplate
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  placeholder="example@email.com"
                />
                <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                  {formik.touched.email && formik.errors.email}
                </span>

                <AuthInputTemplate
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  placeholder="password"
                />
                <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                  {formik.touched.password && formik.errors.password}
                </span>
              </div>
              <div className="flex justify-between items-center mt-[2rem] font-poppinsLight w-full text-smaller text-ctaColor sm:text-small">
                <Link to="/forgot-password">Forgot Password</Link>
                <Link to="/register">Register</Link>
              </div>
              <button
                type="submit"
                className="bg-ctaColor text-bodyColor w-full py-[0.5rem] mt-[3rem]"
              >
                Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
