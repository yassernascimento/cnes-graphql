import { ApolloServer, gql, ServerInfo } from "apollo-server";
import { SERVER_PORT } from "./constants";

export class Server {
  private typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  private resolvers = {
    Query: {
      hello: () => "World"
    }
  };

  private server = new ApolloServer({
    typeDefs: this.typeDefs,
    resolvers: this.resolvers
  });

  public async start() {
    const serverInfo: ServerInfo = await this.server.listen(SERVER_PORT);
    console.log(`Server is Listening at: ${serverInfo.url}`);
  }
}
