import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./prisma-layer";
import { resolvers } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schemas/schema.graphql",
  resolvers: resolvers(prisma),
  context: req => ({ ...req, prisma })
});
server.start(() => console.log("Server is running on http://localhost:4000"));
