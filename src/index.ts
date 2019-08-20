import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { Context } from "./utils";

const resolvers = {
  Query: {
    estabelecimento(parent: any, { CO_UNIDADE }: any, context: Context) {
      return context.prisma.estabelecimento({ CO_UNIDADE });
    },
    estabelecimentos(parent: any, args: any, context: Context) {
      return context.prisma.estabelecimentoes(args);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
