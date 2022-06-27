export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "string",
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    },
    {
      name: "tweet",
      title: "Tweet",
      type: "reference",
      to: { type: "tweet" },
    },
  ],
};
