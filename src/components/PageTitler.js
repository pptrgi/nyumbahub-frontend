import { Helmet } from "react-helmet";

// Dynamically title pages
const PageTitler = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title className="capitalize">
          {title === ""
            ? "NyumbaHub - A Vacant Houses Finding Service Kenya"
            : `${title} | NyumbaHub Vacant Houses Finder`}
        </title>
      </Helmet>
    </div>
  );
};

export default PageTitler;
