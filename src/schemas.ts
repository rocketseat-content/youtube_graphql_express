import { loadFilesSync, mergeTypeDefs } from "graphql-tools";
import path from "path";

const mergePath = loadFilesSync(
  path.join(__dirname, "modules/**/graphql/*.gql")
);

const schemas = mergeTypeDefs(mergePath);

export default schemas;
