import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { Context } from "./utils";

const estabelecimentoFragment = `fragment estabelecimentoFields on Estabelecimento {
  CO_UNIDADE
  CO_CNES
  NU_CNPJ_MANTENEDORA
  TP_PFPJ
  NIVEL_DEP
  NO_RAZAO_SOCIAL
  NO_FANTASIA
  NO_LOGRADOURO
  NU_ENDERECO
  NO_COMPLEMENTO
  NO_BAIRRO
  CO_CEP
  CO_REGIAO_SAUDE
  CO_MICRO_REGIAO
  CO_DISTRITO_SANITARIO
  CO_DISTRITO_ADMINISTRATIVO
  NU_TELEFONE
  NU_FAX
  NO_EMAIL
  NU_CPF
  NU_CNPJ
  ATIVIDADE { CO_ATIVIDADE DS_ATIVIDADE }
  CO_CLIENTELA
  NU_ALVARA
  DT_EXPEDICAO
  TP_ORGAO_EXPEDIDOR
  DT_VAL_LIC_SANI
  TP_LIC_SANI
  TP_UNIDADE
  CO_TURNO_ATENDIMENTO
  CO_ESTADO_GESTOR
  CO_MUNICIPIO_GESTOR
  DT_ATUALIZACAO
  CO_USUARIO
  CO_CPFDIRETORCLN
  REG_DIRETORCLN
  ST_ADESAO_FILANTROP
  CO_MOTIVO_DESAB
  NO_URL
  NU_LATITUDE
  NU_LONGITUDE
  DT_ATU_GEO
  NO_USUARIO_GEO
  CO_NATUREZA_JUR
  TP_ESTAB_SEMPRE_ABERTO
  ST_GERACREDITO_GERENTE_SGIF
  ST_CONEXAO_INTERNET
  CO_TIPO_UNIDADE
  NO_FANTASIA_ABREV
  TP_GESTAO
  DT_ATUALIZACAO_ORIGEM
  CO_TIPO_ESTABELECIMENTO
  CO_ATIVIDADE_PRINCIPAL
  ST_CONTRATO_FORMALIZADO
}`;

const resolvers = {
  Query: {
    estabelecimento(parent: any, { CO_UNIDADE }: any, context: Context) {
      return context.prisma
        .estabelecimento({ CO_UNIDADE })
        .$fragment(estabelecimentoFragment);
    },
    estabelecimentos(parent: any, args: any, context: Context) {
      return context.prisma
        .estabelecimentoes(args)
        .$fragment(estabelecimentoFragment);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schemas/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
