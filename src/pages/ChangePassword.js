import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import { changePasswordAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";
import FadeOutAnimation from "../components/FadeOutAnimation";

// Define the schema for the change-password form input fields
const changePassSchema = yup.object({
  newPassword: yup.string().required("Please enter your new password"),
  confirmPassword: yup.string().required("Please confirm your new password"),
});

const ChangePassword = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user.user);

  // Consume the defined schema
  // Define the initial values for the input fields
  // Handle form submit
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePassSchema,
    onSubmit: (values, { resetForm }) => {
      if (formik.values.newPassword !== formik.values.confirmPassword) {
        toast.error("Passwords do not match");
      } else {
        dispatch(
          changePasswordAC({
            userId: userData?.id,
            values,
          })
        );
        // resetForm()
      }
      // Remember to reset the form fields
    },
  });
  return (
    <FadeOutAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Change Password"} />
        <PageTitler title={"Change Password"} />
        <div className="flex justify-center items-center w-full min-h-[70vh]">
          <div className="flex flex-col gap-[2rem]">
            <div className="w-[300px] bg-white rounded-sm pt-[3rem] pb-[2rem] md480:w-[400px] md800:w-[500px]">
              <div className="flex flex-col items-center w-full gap-[2.5rem] px-[1rem] md480:col-span-3">
                <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default md480:text-h3">
                  Change your Current Password
                </h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center text-textColor w-full md480:w-3/4"
                >
                  <div className="flex flex-col space-y-[0.5rem] w-full">
                    <AuthInputTemplate
                      type="password"
                      name="newPassword"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange("newPassword")}
                      onBlur={formik.handleBlur("newPassword")}
                      placeholder="New password"
                      maxLength="40"
                    />
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                      {formik.touched.newPassword && formik.errors.newPassword}
                    </span>

                    <AuthInputTemplate
                      type="password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange("confirmPassword")}
                      onBlur={formik.handleBlur("confirmPassword")}
                      placeholder="Confirm password"
                      maxLength="40"
                    />
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
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
                        Change
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default ChangePassword;
