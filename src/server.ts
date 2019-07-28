import { ApolloServer, gql, ServerInfo } from "apollo-server";
import { SERVER_PORT } from "./constants";
import { Database } from "./database";

export class Server {
  private typeDefs = gql`
    type Estabelecimento {
      CO_UNIDADE: String
      CO_CNES: String
      NU_CNPJ_MANTENEDORA: String
      TP_PFPJ: String
      NIVEL_DEP: String
      NO_RAZAO_SOCIAL: String
      NO_FANTASIA: String
      NO_LOGRADOURO: String
      NU_ENDERECO: String
      NO_COMPLEMENTO: String
      NO_BAIRRO: String
      CO_CEP: String
      CO_REGIAO_SAUDE: String
      CO_MICRO_REGIAO: String
      CO_DISTRITO_SANITARIO: String
      CO_DISTRITO_ADMINISTRATIVO: String
      NU_TELEFONE: String
      NU_FAX: String
      NO_EMAIL: String
      NU_CPF: String
      NU_CNPJ: String
      CO_ATIVIDADE: String
      CO_CLIENTELA: String
      NU_ALVARA: String
      DT_EXPEDICAO: String
      TP_ORGAO_EXPEDIDOR: String
      DT_VAL_LIC_SANI: String
      TP_LIC_SANI: String
      TP_UNIDADE: String
      CO_TURNO_ATENDIMENTO: String
      CO_ESTADO_GESTOR: String
      CO_MUNICIPIO_GESTOR: String
      DT_ATUALIZACAO: String
      CO_USUARIO: String
      CO_CPFDIRETORCLN: String
      REG_DIRETORCLN: String
      ST_ADESAO_FILANTROP: String
      CO_MOTIVO_DESAB: String
      NO_URL: String
      NU_LATITUDE: String
      NU_LONGITUDE: String
      DT_ATU_GEO: String
      NO_USUARIO_GEO: String
      CO_NATUREZA_JUR: String
      TP_ESTAB_SEMPRE_ABERTO: String
      ST_GERACREDITO_GERENTE_SGIF: String
      ST_CONEXAO_INTERNET: String
      CO_TIPO_UNIDADE: String
      NO_FANTASIA_ABREV: String
      TP_GESTAO: String
      DT_ATUALIZACAO_ORIGEM: String
      CO_TIPO_ESTABELECIMENTO: String
      CO_ATIVIDADE_PRINCIPAL: String
      ST_CONTRATO_FORMALIZADO: String
    }

    type Query {
      estabelecimento(co_unidade: ID!): Estabelecimento
    }
  `;

  private resolvers = {
    Query: {
      estabelecimento: async (obj: any, args: any, context: any, info: any) => {
        return await this.database.getEstabelecimento(args.co_unidade);
      }
    }
  };

  private server = new ApolloServer({
    typeDefs: this.typeDefs,
    resolvers: this.resolvers
  });

  constructor(private database: Database) {}

  public async start() {
    const serverInfo: ServerInfo = await this.server.listen(SERVER_PORT);
    console.log(`Server is Listening at: ${serverInfo.url}`);
  }
}
