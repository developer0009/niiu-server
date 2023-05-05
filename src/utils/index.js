import { createClient } from "@sanity/client";
export const projectId = "vxuo0edk";
export const dataset = "production";
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
});
export default client;

export const queryString = `*[_type == "post"] {
          title,
          slug,
          carddesc,
          author,
          publishedAt,
          canonical,
          hreflang,
          alttags,
          body,
          metadescription,
          metatitle,
          keywords,
          mainalt,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`;
