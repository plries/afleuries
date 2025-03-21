import { metadata } from "../../metadata";

export const Head = () => {
  return (
    <head>
      <meta name="description" content={metadata.description ?? ""} />
      <meta
        name="author"
        content={
          (Array.isArray(metadata.authors)
            ? metadata.authors.join(", ")
            : metadata.authors?.name) ?? ""
        }
      />
      <meta
        name="keywords"
        content={
          (Array.isArray(metadata.keywords)
            ? metadata.keywords.join(", ")
            : metadata.keywords) ?? ""
        }
      />
      <meta
        name="description"
        content={metadata.description?.toString() ?? ""}
      />
      <meta property="og:description" content={metadata.description ?? ""} />
      <title>{metadata.title?.toString()}</title>
    </head>
  );
};
