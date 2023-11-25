import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import PageTitler from "../components/PageTitler";
import FadeInAnimation from "../components/FadeInAnimation";

// Define the schema for the forgot-password form input fields
const forgotPassSchema = yup.object({
  emailForgot: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required resetting forgotten password"),
});

const ForgotPassword = () => {
  // Consume the defined schema
  // Define the initial values for the input fields
  // ******************** SUBMIT PENDING ***********************
  const formik = useFormik({
    initialValues: {
      emailForgot: "",
    },
    validationSchema: forgotPassSchema,
    onSubmit: (values) => {
      toast.error("Forgot password functionality is under implementation");
    },
  });
  return (
    <FadeInAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Forgot Password"} />
        <PageTitler title={"Forgot Password"} />
        <div className="flex justify-center items-center w-full min-h-[70vh]">
          <div className="flex flex-col items-center gap-[2rem]">
            <div className="flex flex-col justify-center items-center gap-[0.5rem]">
              <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default md480:text-h3">
                Ask to set new Password
              </h3>
              <p className="font-poppinsLight text-center leading-tight max-w-sm text-textColor text-smaller md480:text-small">
                A link to reset your password will be sent to the email you
                provide. Please visit that link
              </p>
            </div>
            <div className="w-[300px] bg-white rounded-sm pt-[4rem] pb-[2rem] md480:w-[400px] md800:w-[500px]">
              <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] w-full md480:col-span-3">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center text-textColor w-full md480:w-3/4"
                >
                  <div className="flex flex-col space-y-[0.75rem] w-full">
                    <AuthInputTemplate
                      type="email"
                      name="emailForgot"
                      value={formik.values.emailForgot}
                      onChange={formik.handleChange("emailForgot")}
                      onBlur={formik.handleBlur("emailForgot")}
                      placeholder="example@email.com"
                      maxLength="40"
                    />
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                      {formik.touched.emailForgot && formik.errors.emailForgot}
                    </span>
                  </div>
                  <div className="flex justify-end items-end mt-[3rem] w-full">
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/"
                        className="text-textColor w-full hover:text-darkThemeColor"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="bg-ctaColor text-bodyColor w-full py-[0.5rem] px-[1.25rem] rounded-md hover:bg-darkThemeColor"
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
    </FadeInAnimation>
  );
};

export default ForgotPassword;
