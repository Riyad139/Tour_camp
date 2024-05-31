import axios from "axios";
import { EventType } from "./type";

export const path = process.env.NEXT_PUBLIC_strapi_url;

export const FetchFromStrapiForInfoBlocks = async (url: string) => {
  try {
    const res = await axios.get(path + url + "?populate=deep");
    const result = res.data.data.attributes.info_blocks.data.map(
      ({ id, attributes }: { id: any; attributes: any }) => {
        return {
          id,
          ...attributes,
          image: attributes.image.data.attributes.url,
        };
      }
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const FetchBlogFromStrapi = async (url: string) => {
  try {
    const res = await axios.get(path + url + "?populate=deep");
    const result = res.data.data.map((item: any) => {
      return {
        id: item.id,
        ...item.attributes,
        coverImage: item.attributes.coverImage.data.attributes.url,
      };
    });
    return result;
  } catch (err) {}
};

export const FetchHeroesFromStrapi = async (url: string) => {
  try {
    const res = await axios.get(path + url + "?populate=deep");

    const { Headline, image, TextWhite } =
      res.data.data.attributes.heroes.data[0].attributes;
    return { Headline, image: image.data.attributes.url, TextWhite };
  } catch (err) {}
};

export const FetchEventsFromStrapi = async (url: string) => {
  try {
    const res = await axios.get(path + url + "?populate=deep");
    return res.data.data.map((data: any) => {
      return {
        id: data.id,
        headline: data.attributes.headline,
        descriptions: data.attributes.descriptions,
        createdAt: data.attributes.createdAt,
        cover: data.attributes.cover.data.attributes.url,
        packages: data.attributes.packages,
      };
    });
  } catch (err) {
    console.error(err);
  }
};
