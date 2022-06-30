import { getClient } from "utils/sanity/server";

const uploadTweetImage = async (rev: string, imageFile: File) => {
  const client = getClient(true);
  const asset = await client.assets.upload("image", imageFile);
  await client
    .patch({ query: `*[_rev == "${rev}"]` })
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
