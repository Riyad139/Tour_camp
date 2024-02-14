import axios from "axios";

export const path = "http://127.0.0.1:1337/api";

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
