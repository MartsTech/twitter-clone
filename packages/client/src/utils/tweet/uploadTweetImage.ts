import type { ImageBody } from "types/sanity";
import { getClient } from "utils/sanity/server";

const uploadTweetImage = async (props: ImageBody) => {
  const client = getClient(false);
  const asset = await client.assets.upload("image", props.imageFile);
  await client
    .patch({ query: `*[_rev == "${props.rev}"]` })
    .set({
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset["_id"],
        },
      },
    })
    .commit();
};

export default uploadTweetImage;
