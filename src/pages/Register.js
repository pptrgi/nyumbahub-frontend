import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import { registerUserAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";
import FadeOutAnimation from "../components/FadeOutAnimation";

// Define the schema for the user register form input fields
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

  // Consume the defined schema
  // Define the initial values for the input fields
  // Handle form submit
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUserAC(values));
      resetForm();
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    },
  });
  return (
    <FadeOutAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Register"} />
        <PageTitler title={"Register"} />
        <div className="flex justify-center items-center w-full min-h-[70vh] mt-[1.5rem] mb-[2rem]">
          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default md480:text-h3">
              Create your Account
            </h3>
            <div className="w-[300px] bg-white rounded-sm pt-[3rem] pb-[2rem] md480:w-[400px] md800:w-[500px]">
              <div className="flex flex-col items-center w-full gap-[2.5rem] px-[1rem] md480:col-span-3">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center text-textColor w-full md480:w-3/4"
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
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
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
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
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
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                      {formik.touched.email && formik.errors.email}
                    </span>

                    <AuthInputTemplate
                      type="number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange("phone")}
                      onBlur={formik.handleBlur("phone")}
                      placeholder="e.g. 0700119134"
                      maxLength="10"
                    />
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
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
                    <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                      {formik.touched.password && formik.errors.password}
                    </span>
                  </div>
                  <div className="flex justify-end items-end mt-[2rem] font-poppinsLight w-full text-smaller md480:text-small">
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
                  <p className="text-tiny text-textColor leading-tight font-poppinsLight mt-[0.75rem] md480:text-smaller">
                    By creating an account, you accept our{" "}
                    <span className="text-ctaColor hover:text-darkThemeColor">
                      <Link to="/terms-of-service">Terms of Service</Link>
                    </span>{" "}
                    and acknowledge our{" "}
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
    </FadeOutAnimation>
  );
};

export default Register;
