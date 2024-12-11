// Definisci i typeDefs
const typeDefs = `#graphql
    scalar JSON
  enum Role {
    user
    owner
  }

  enum InteractionType {
    like
    dislike
  }

  type User {
    id: String!
    role: Role!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    fiscalCode: String!
    address: String!
    postalCode: String!
    city: String!
    createdAt: String!
    updatedAt: String!
  }

  type Description {
    id: String!
    details: JSON!
    createdAt: String!
    updatedAt: String!
  }

  type Cat {
    id: String!
    name: String!
    age: Int
    descriptionId: String!
    photoUrl: String
    createdAt: String!
    updatedAt: String!
  }

  type Match {
    id: String!
    catId: String!
    userId: String!
    date: String!
    createdAt: String!
    updatedAt: String!
  }

  type Interaction {
    id: String!
    catId: String!
    userId: String!
    type: InteractionType!
    date: String!
    createdAt: String!
    updatedAt: String!
  }
type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    users: [User!]!
    descriptions: [Description!]!
    cats: [Cat!]!
    matches: [Match!]!
    interactions: [Interaction!]!
  }
  type Mutation {
        signup(
      role: String!
      username: String!
      password: String!
      email: String!
      firstName: String!
      lastName: String!
      fiscalCode: String!
      address: String!
      postalCode: String!
      city: String!
    ): Boolean!
    login(username: String!, password: String!): AuthPayload!
  }
`;

export default typeDefs;
