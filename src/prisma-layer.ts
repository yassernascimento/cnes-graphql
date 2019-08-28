import { Prisma } from "prisma-binding";

export const prisma = new Prisma({
  typeDefs: "src/generated/schema.graphql",
  endpoint: "http://67.205.180.247:4466/"
});
