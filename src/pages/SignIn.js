import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

import Breadcrumb from "../components/Breadcrumb";
import AuthInputTemplate from "../components/AuthInputTemplate";
import { signinUserAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";
import FadeInAnimation from "../components/FadeInAnimation";

// Define the schema for the signin form input fields
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

  // Consume the defined schema
  // Define the initial values for the input fields
  // Handle form submit
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(signinUserAC(values));
      if (userState.isSuccess == true) {
        resetForm();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    },
  });

  return (
    <FadeInAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Sign In"} />
        <PageTitler title={"Sign In"} />
        <div className="flex justify-center items-center w-full min-h-[70vh]">
          <div className="w-[300px] bg-white rounded-sm md480:w-[400px] md800:w-[500px]">
            <div className="flex flex-col items-center w-full gap-[2.5rem] px-[1rem] py-[2rem] md480:col-span-3">
              <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default md480:text-h3">
                Sign In to your Account
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center text-textColor w-full md480:w-3/4"
              >
                <div className="flex flex-col space-y-[0.5rem] w-full">
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
                <div className="flex justify-between items-center mt-[2rem] font-poppinsLight w-full text-smaller text-ctaColor md480:text-small">
                  <Link
                    to="/forgot-password"
                    className="hover:text-darkThemeColor"
                  >
                    Forgot Password
                  </Link>
                  <Link to="/register" className="hover:text-darkThemeColor">
                    Register
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-ctaColor text-bodyColor w-full py-[0.5rem] mt-[3rem] hover:bg-lightThemeColor"
                >
                  Signin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default SignIn;
