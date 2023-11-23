import { Link } from "react-router-dom";

import PageTitler from "../components/PageTitler";
import FadeInAnimation from "../components/FadeInAnimation";

const TermsOfService = () => {
  return (
    <>
      <PageTitler title={"Terms of Service"} />
      <FadeInAnimation delay={true}>
        <div className="custom_container pt-[5rem] pb-[3rem] md800:pt-[11rem]">
          <div className="flex justify-center items-center mb-[3rem]">
            <h2 className="font-poppinsSemibold text-h3 text-darkThemeColor text-center md480:text-h2">
              Terms of Service for NyumbaHub
            </h2>
          </div>
          <div className="flex flex-col space-y-[2rem] mt-[2rem] md480:space-y-[2.5rem]">
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Introduction
              </h4>
              <p className="text-textColor">
                These terms and conditions govern the use of the vacant house
                finding service referred to as NyumbaHub provided by Lifen
                Creatives through the NyumbaHub website.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Acceptance of Terms
              </h4>
              <p className="text-textColor">
                By accessing or using the NyumbaHub service, you agree to be
                bound by these terms and conditions. If you DO NOT agree with
                ANY part of these terms, you MUST not use the service.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                User Responsibilities
              </h4>
              <p className="text-textColor">
                Users of the service agree to provide accurate and up-to-date
                informarion during the registration process. You are responsible
                for maintaining the confidentiality of your account and password
                and for all activities that occur under your account.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Property Listings
              </h4>
              <p className="text-textColor">
                NyumbaHub strives to provide accurate and currrent information
                about vacant properties, but it does not guarantee the
                availability, condition, or accuracy or any listings. Users are
                advised to independently verify the property details before
                making any decisions.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Use of Information
              </h4>
              <p className="text-textColor">
                Any information obtained through the Service should not be used
                for unlawful or unethical purposes. Users shall not reproduce,
                modify, distribute, or publicy display any content from
                NyumbaHub without our prior written consent.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                User Conduct
              </h4>
              <p className="text-textColor">
                Users agree to use NyumbaHub for lawful purposes only and shall
                not engage in any activities that may disrupt or interfere with
                the service's functionality or security.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Privacy
              </h4>
              <p className="text-textColor">
                NyumbaHub values your privacy and handles your personal
                information in accordance with its{" "}
                <span className="text-ctaColor hover:font-poppinsLight">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>
                , which is incorporated into these terms of service.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Limitation of Liability
              </h4>
              <p className="text-textColor">
                Lifen Creatives shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising out of
                the use or inability to use the NyumbaHub service, including but
                not limited to errors, omissions, interruptions, defects, delays
                or viruses.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Indemnification
              </h4>
              <p className="text-textColor">
                Users agree to indemnify and hold Lifen Creatives harmless from
                any claims, damages, liabilites or expenses arising from their
                use of the NyumbaHub service or violation of these terms.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Modification of Terms
              </h4>
              <p className="text-textColor">
                Lifen Creatives reserves the right to modify, suspend, or
                discontinue the NyumbaHub service or any part thereof, at any
                time without prior notice. Changes to these terms will be
                effective upon posting on the website.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Governing Law
              </h4>
              <p className="text-textColor">
                These terms of service shall be governed by and construed in
                accordance with the laws of Kenya. Any disputes arising out of
                or in connection with these terms shall be subject to the
                exclusive jurisdiction fo the courts of Kenya.
              </p>
            </div>
            <div className="flex flex-col space-y-[0.75rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold font-mediumWeight text-default md480:text-h3">
                Contact Information
              </h4>
              <p className="text-textColor">
                For any questions or concerns regarding these terms of service,
                you can contact Lifen Creatives{" "}
                <span className="text-ctaColor hover:font-poppinsLight">
                  <a href="mailto:lifencreatives@gmail.com">here</a>
                </span>
              </p>
            </div>
          </div>
          <p className="text-lightThemeColor mt-[3.5rem]">
            By using the NyumbaHub service, you acknowledge that you have read,
            understood and agreed to these terms of service.
          </p>
        </div>
      </FadeInAnimation>
    </>
  );
};

export default TermsOfService;
