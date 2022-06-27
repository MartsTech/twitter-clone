export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "string",
    },
    {
      name: "isBlocked",
      title: "Block Tweet",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    },
  ],
  preview: {
    select: {
      title: "body",
      media: "image",
    },
  },
};
