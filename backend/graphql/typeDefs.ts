import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    nome: String
    cognome: String
    cf: String
    indirizzo: String
    cap: Int
    citta: String
    matches: [Match!]!
    likes: [Like!]!
    dislikes: [Dislike!]!
  }

  type Description {
    id: ID!
    weight: Float
    attitude: String
    fur: String
    breed: String
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
    age: Int
    description: Description!
    photoUrl: String
    matches: [Match!]!
    likes: [Like!]!
    dislikes: [Dislike!]!
  }

  type Match {
    id: ID!
    cat: Cat!
    user: User!
    date: String!
  }

  type Like {
    id: ID!
    cat: Cat!
    user: User!
    date: String!
  }

  type Dislike {
    id: ID!
    cat: Cat!
    user: User!
    date: String!
  }

  type Query {
    users: [User!]!
    user(username: String!): User
    cats: [Cat!]!
    cat(id: ID!): Cat
    descriptions: [Description!]!
    description(id: ID!): Description
    matches: [Match!]!
    likes: [Like!]!
    dislikes: [Dislike!]!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): String! # Restituisce un token JWT
    refreshToken(token: String!): String! # Restituisce un nuovo token JWT
    likeCat(catId: ID!): Boolean! # Esempio di mutazione
    dislikeCat(catId: ID!): Boolean! # Esempio di mutazione
  }

  type Subscription {
    newMatch(userId: ID!): Match
  }
`;

export default typeDefs;
