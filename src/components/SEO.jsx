import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

const SEO = ({ title, description }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="theme-color" content="#205295" />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;