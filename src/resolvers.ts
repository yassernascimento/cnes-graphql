export const resolvers = (prisma: any) => {
  return {
    Query: {
      estabelecimento(parent: any, where: any, context: any, info: any) {
        return prisma.query.estabelecimento({ where }, info);
      },
      estabelecimentos(parent: any, args: any, context: any, info: any) {
        return prisma.query.estabelecimentoes(args, info);
      }
    }
  };
};
