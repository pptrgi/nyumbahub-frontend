import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import AuthInputTemplate from "../components/AuthInputTemplate";
import * as yup from "yup";
import { useFormik } from "formik";

const forgotPassSchema = yup.object({
  emailForgot: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required resetting forgotten password"),
});
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      emailForgot: "",
    },
    validationSchema: forgotPassSchema,
    onSubmit: (values) => {},
  });
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Forgot Password"} />
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex flex-col justify-center items-center gap-[0.5rem]">
            <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
              Ask to set new Password
            </h3>
            <p className="font-poppinsLight text-center leading-tight text-textColor text-smaller sm:text-small max-w-sm">
              A link to reset your password will be sent to the email you
              provide. Please visit that link
            </p>
          </div>
          <div className="w-[300px] bg-white rounded-sm pt-[4rem] pb-[2rem] sm:w-[400px] md:w-[500px]">
            <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] sm:col-span-3 w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center text-textColor w-full sm:w-3/4"
              >
                <div className="flex flex-col space-y-[0.75rem] w-full">
                  <AuthInputTemplate
                    type="email"
                    name="emailForgot"
                    value={formik.values.emailForgot}
                    onChange={formik.handleChange("emailForgot")}
                    onBlur={formik.handleBlur("emailForgot")}
                    placeholder="example@email.com"
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.emailForgot && formik.errors.emailForgot}
                  </span>
                </div>
                <div className="flex justify-end items-end mt-[3rem] w-full">
                  <div className="flex items-center space-x-4">
                    <Link to="/" className="text-textColor w-full">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="bg-ctaColor text-bodyColor w-full py-[0.5rem] px-[1.25rem] rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
