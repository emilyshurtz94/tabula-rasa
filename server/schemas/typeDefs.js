const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dailyForm: [dailyFormSchema]
}

type dailyFormSchema {
    formID: ID
    music: Boolean
    workout: Boolean
    meditation: Boolean
    recap: [recapSchema]
}

type Auth {
    token: ID!
    user: User
  }


type Query {
    me: User
    form: Form
}

type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeUser: User
  }`;

module.exports = typeDefs;