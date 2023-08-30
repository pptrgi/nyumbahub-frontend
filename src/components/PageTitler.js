import { Helmet } from "react-helmet";

const PageTitler = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title className="capitalize">
          {title === ""
            ? "NyumbaHub - Vacant Houses Finder"
            : `${title} | NyumbaHub`}
        </title>
      </Helmet>
    </div>
  );
};

export default PageTitler;
