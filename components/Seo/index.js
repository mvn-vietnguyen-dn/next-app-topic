import Head from "next/head";
import React from "react";

export const Seo = ({
  isArticle = false,
  author,
  image,
  noIndex,
  keywords,
  title,
  description,
  url,
}) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {author && (
        <>
          <meta name="author" content={author} />
          <meta property="og:author" content={author} />
          <meta name="twitter:author" content={author} />
        </>
      )}
      {image && (
        <>
          <meta name="image" content={image} />
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex,follow" />}
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
