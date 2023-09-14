import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import PageTitler from "../components/PageTitler";

// Define the schema for the reset-password form input fields
const resetPassSchema = yup.object({
  password: yup.string().required("Please enter your new password"),
  confirmPassword: yup.string().required("Please confirm your new password"),
});

const ResetPassword = () => {
  // Consume the defined schema
  // Define the initial values for the input fields
  // ******************** SUBMIT PENDING ***********************
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPassSchema,
    onSubmit: (values) => {
      toast.info("Reset password functionality is under implementation");
    },
  });
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Reset Password"} />
      <PageTitler title={"Reset Password"} />
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="flex flex-col gap-[2rem]">
          <div className="w-[300px] bg-white rounded-sm sm:w-[400px] md:w-[500px] pt-[3rem] pb-[2rem]">
            <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] sm:col-span-3 w-full">
              <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
                Reset your Forgotten Password
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center text-textColor w-full sm:w-3/4"
              >
                <div className="flex flex-col space-y-[0.5rem] w-full">
                  <AuthInputTemplate
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    placeholder="New password"
                    maxLength={40}
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.password && formik.errors.password}
                  </span>

                  <AuthInputTemplate
                    type="password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                    placeholder="Confirm password"
                    maxLength={40}
                  />
                  <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] sm:text-small">
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword}
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
                      Reset
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

export default ResetPassword;
