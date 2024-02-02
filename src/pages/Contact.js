import { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { PiWhatsappLogo, PiEnvelope, PiPhone } from "react-icons/pi";

import Breadcrumb from "../components/Breadcrumb";
import PageTitler from "../components/PageTitler";
import FadeOutAnimation from "../components/FadeOutAnimation";

// Define the schema for the contact form input fields
const contactFormSchema = yup.object({
  name: yup.string().required("Your full name is required"),
  email: yup
    .string()
    .email("The entered email is not valid")
    .required("Please provide your email address"),
  subject: yup.string().required("The subject of the message is required"),
  message: yup.string().required("You can't send an empty message body"),
});

const Contact = () => {
  const contactFormRef = useRef();

  // Consume the defined schema
  // Define the initial values for the input fields
  // Handle form submit
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, { resetForm }) => {
      // Sends message to Lifen Creatives' email

      sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        contactFormRef.current,
        `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`
      )
        .then(() => {
          toast.success("Your message has been sent");
          resetForm();
        })
        .catch((error) => {
          toast.error("Sorry message not sent, resend");
        });
    },
  });

  return (
    <FadeOutAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Contact"} />
        <PageTitler title={"Contact Us"} />
        <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
          Get in Touch
        </h2>
        <div className="flex flex-col justify-center items-center gap-[1.5rem]">
          <div className="flex flex-col gap-[2rem] w-[100%] md480:max-w-[65%] md800:max-w-[60%] lg1023:max-w-[45%] lg1120:max-w-[40%]">
            <form
              ref={contactFormRef}
              onSubmit={formik.handleSubmit}
              className="w-full bg-white flex flex-col space-y-[0.5rem] border-b-[1.5px] border-gray-100 px-[1rem] py-[3rem] rounded-md md480:px-[2rem]"
            >
              <div className="relative bg-inherit rounded-md">
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  className="contact_input"
                  maxLength={40}
                />
                <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller md480:text-small">
                  Full Name
                </span>
              </div>
              <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                {formik.touched.name && formik.errors.name}
              </span>

              <div className="relative bg-inherit rounded-md">
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="contact_input"
                  maxLength={40}
                />
                <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller md480:text-small">
                  Email Address
                </span>
              </div>
              <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                {formik.touched.email && formik.errors.email}
              </span>

              <div className="relative bg-inherit rounded-md">
                <input
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange("subject")}
                  onBlur={formik.handleBlur("subject")}
                  className="contact_input"
                  maxLength={70}
                />
                <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller md480:text-small">
                  Subject
                </span>
              </div>
              <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                {formik.touched.subject && formik.errors.subject}
              </span>

              <div className="relative bg-inherit rounded-md">
                <textarea
                  rows={4}
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange("message")}
                  onBlur={formik.handleBlur("message")}
                  className="contact_input resize-none"
                />
                <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller md480:text-small">
                  Message
                </span>
              </div>
              <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                {formik.touched.message && formik.errors.message}
              </span>

              <div className="flex justify-end items-end">
                <button
                  type="submit"
                  className="bg-ctaColor text-bodyColor px-[1.5rem] py-[0.75rem] rounded-md hover:bg-darkThemeColor"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-[100%] pt-[1rem] pb-[3rem] md480:max-w-[80%] md800:max-w-[70%] lg1023:max-w-[50%]">
            <div className="flex justify-between w-full items-center text-textColor font-poppinsLight">
              <a
                href="https://wa.me/254700119134"
                className="flex items-center space-x-[0.25rem] hover:text-ctaColor md480:space-x-[0.5rem]"
              >
                <span className="text-h3 md480:text-h2">
                  <PiWhatsappLogo />
                </span>
                <span className="flex flex-col items-start w-full md480:space-y-[0.125rem]">
                  <span className="text-tiny md480:text-small">Via</span>
                  <span className="text-smaller md480:text-default">
                    Whatsapp
                  </span>
                </span>
              </a>
              <a
                href="tel:254700119134"
                className="flex items-center space-x-[0.25rem] hover:text-ctaColor md480:space-x-[0.5rem]"
              >
                <span className="text-h3 md480:text-h2">
                  <PiPhone />
                </span>
                <span className="flex flex-col items-start w-full md480:space-y-[0.125rem]">
                  <span className="text-tiny md480:text-small">Make</span>
                  <span className="text-smaller md480:text-default">
                    Phone Call
                  </span>
                </span>
              </a>
              <a
                href="mailto:lifencreatives@gmail.com"
                className="flex items-center space-x-[0.25rem] hover:text-ctaColor md480:space-x-[0.5rem]"
              >
                <span className="text-h3 md480:text-h2">
                  <PiEnvelope />
                </span>
                <span className="flex flex-col items-start w-full md480:space-y-[0.125rem]">
                  <span className="text-tiny md480:text-small">Send</span>
                  <span className="text-smaller md480:text-default">
                    An Email
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default Contact;
