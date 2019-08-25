import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./prisma-layer";

const resolvers = {
  Query: {
    estabelecimento(parent: any, { CO_UNIDADE }: any, context: any, info: any) {
      return prisma.query.estabelecimento({ where: { CO_UNIDADE } }, info);
    },
    estabelecimentos(parent: any, args: any, context: any, info: any) {
      return prisma.query.estabelecimentoes(args, info);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schemas/schema.graphql",
  resolvers,
  context: req => ({ ...req, prisma })
});
server.start(() => console.log("Server is running on http://localhost:4000"));
