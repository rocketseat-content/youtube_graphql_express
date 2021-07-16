import { loadFilesSync, mergeResolvers } from "graphql-tools";
import path from "path";

const mergePath = loadFilesSync(
  path.join(__dirname, "modules/**/graphql/*.resolvers.ts")
);

const resolvers = mergeResolvers(mergePath);

export default resolvers;
