import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    clients: [Client]
    client(id: ID): Client
  }
  #User Model Object
  type Client {
    id: ID
    name: String
    projectValue: Int
    projectDepartment: String
    city: String
  }
  #UserMutation
  type Mutation {
    create(
      name: String
      projectValue: Int
      projectDepartment: String
      city: String
    ): Client
  }
`;
