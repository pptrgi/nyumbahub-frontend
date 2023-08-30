import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import { registerUserAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";

const registerSchema = yup.object({
  firstName: yup.string().required("First name field is required"),
  lastName: yup.string().required("Last name field is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address field is required"),
  phone: yup.string().required("Phone number field is required"),
  password: yup.string().required("Password field is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user.user);
  console.log("register user state", userState);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUserAC(values));
      if (userState.isSuccess === true) {
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      }
    },
  });
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Register"} />
      <PageTitler title={"Register"} />
      <div className="flex justify-center items-center w-full min-h-[70vh] mt-[1.5rem] mb-[2rem]">
        <div className="flex flex-col gap-[2rem]">
          <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
            Create your Account
          </h3>
          <div className="w-[300px] bg-white rounded-sm sm:w-[400px] md:w-[500px] pt-[3rem] pb-[2rem]">
            <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] sm:col-span-3 w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center text-textColor w-full sm:w-3/4"
              >
                <div className="flex flex-col space-y-[0.5rem] w-full">
                  <AuthInputTemplate
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    placeholder="first name"
                    maxLength={20}
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.firstName && formik.errors.firstName}
                  </span>

                  <AuthInputTemplate
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    placeholder="last name"
                    maxLength="20"
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.lastName && formik.errors.lastName}
                  </span>

                  <AuthInputTemplate
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    placeholder="example@email.com"
                    maxLength="40"
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.email && formik.errors.email}
                  </span>

                  <AuthInputTemplate
                    type="number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange("phone")}
                    onBlur={formik.handleBlur("phone")}
                    placeholder="e.g. 0700119134"
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.phone && formik.errors.phone}
                  </span>

                  <AuthInputTemplate
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    placeholder="password"
                    maxLength="40"
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.password && formik.errors.password}
                  </span>
                </div>
                <div className="flex justify-end items-end mt-[2rem] font-poppinsLight w-full text-smaller sm:text-small">
                  <div className="flex items-center space-x-1">
                    <span>Already have an account?</span>
                    <Link
                      to="/signin"
                      className="text-ctaColor hover:text-lightThemeColor"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-ctaColor text-bodyColor w-full py-[0.5rem] mt-[3rem] hover:bg-lightThemeColor"
                >
                  Register
                </button>
                <p className="text-tiny text-textColor leading-tight font-poppinsLight mt-[0.75rem] sm:text-smaller">
                  By registering you accept our{" "}
                  <span className="text-ctaColor hover:text-darkThemeColor">
                    <Link to="/privacy-policy">Terms of Service</Link>
                  </span>{" "}
                  and{" "}
                  <span className="text-ctaColor hover:text-darkThemeColor">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
