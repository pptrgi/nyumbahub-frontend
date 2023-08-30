import React from "react";
import { Link } from "react-router-dom";
import PageTitler from "../components/PageTitler";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitler title={"Privacy Policy"} />
      <div className="page pt-[2rem] pb-[4rem]">
        <div className="flex justify-center items-center mb-[3rem]">
          <h2 className="font-poppinsSemibold text-h3 text-darkThemeColor sm:text-h2">
            Privacy Policy for NyumbaHub
          </h2>
        </div>
        <div className="container flex flex-col justify-start items-start">
          <div className="flex items-center space-x-4 font-poppinsRegular text-lightThemeColor">
            <span>Effective Date:</span>
            <span className="text-textColor">August 15th, 2023</span>
          </div>
          <div className="flex flex-col space-y-[2.25rem] mt-[3rem] sm:space-y-[2.75rem]">
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Introduction
              </h3>
              <p className="text-textColor">
                Welcome to the NyumbaHub vacant houses finder website. We are
                committed to protecting the privacy and security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our services or interact with our website.
              </p>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Information We Collect
              </h3>
              <div className="flex flex-col text-darkThemeColor space-y-[1.5rem] pl-[0.5rem]">
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Personal Information
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Non-Personal Information
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>Time you Accessed Service</li>
                    <li>Log data i.e IP address</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                How We Use Your Information
              </h3>
              <div className="flex flex-col text-darkThemeColor space-y-[1.5rem] pl-[0.5rem]">
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Provide Services
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>Identify vacant houses in your desired location</li>
                    <li>Display property details and image</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Improve User Experience
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li> Enhance and personalize user experience</li>
                    <li>Develop and improve our services</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Communication
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>Respond to user inquiries and requests</li>
                    <li>Send notifications and updates about the website</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Data Sharing and Disclosure
              </h3>
              <div className="flex flex-col text-darkThemeColor space-y-[1.5rem] pl-[0.5rem]">
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Service Providers
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>
                      Use third-party service providers like MongoDB database
                      for technical and operational support
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Legal Compliance
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal requests or protect our rights</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Business Transfers
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>
                      In the event of a merger, acquisition or sale, user
                      information may be transfered. We'll let you know
                      beforehand
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Your Choices
              </h3>
              <div className="flex flex-col text-darkThemeColor space-y-[1.5rem] pl-[0.5rem]">
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Access and Update
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>
                      Review and edit your personal information and password
                      through your account settings
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Location Data
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>
                      You can disable location services, but it may affect the
                      functionality of the app
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-[1rem]">
                  <p className="text-darkThemeColor font-poppinsRegular text-default sm:text-h3">
                    Marketing Communications
                  </p>
                  <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                    <li>
                      Opt-out of recieving marketing emails by following
                      instructions in emails
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Data Security
              </h3>
              <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                <li>
                  We implement technical and organizational measures to protect
                  users data
                </li>
                <li>Regularly review and enhance our security practices</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Children's Privacy
              </h3>
              <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                <li>
                  Our services are not intended for individuals under the age of
                  18
                </li>
                <li>
                  We do not knowingly collect or solicit personal information
                  for minors
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Changes to Privacy Policy
              </h3>
              <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                <li>We may update this policy periodically</li>
                <li>You will be notified of any material changes</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-[1rem]">
              <h3 className="text-lightThemeColor font-poppinsRegular text-h3 sm:text-h2">
                Contact Us
              </h3>
              <ul className="flex flex-col space-y-[0.5rem] pl-[2rem] text-textColor list-disc">
                <li>
                  For any questions or concerns, contact us{" "}
                  <span className="text-ctaColor hover:font-poppinsLight">
                    <a href="mailto:lifencreatives@gmail.com">here</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-lightThemeColor mt-[3.5rem]">
            By using our services, you consent to the practices outlined in this
            Privacy Policy. It's important to review this policy regularly and
            ensure you understand and agree to its terms. You can also check our{" "}
            <span className="text-ctaColor hover:font-poppinsLight">
              <Link to="/terms-of-service">Terms of Service</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
