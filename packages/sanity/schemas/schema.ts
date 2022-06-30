import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import account from "./account";
import comment from "./comment";
import tweet from "./tweet";
import user from "./user";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([user, account, tweet, comment]),
});
