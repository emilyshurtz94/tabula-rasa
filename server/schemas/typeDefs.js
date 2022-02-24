const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dailyForm: [dailyFormSchema]
}

type musicSchema{
    _id: ID
    music: Boolean
    recap: Date
}

type workoutSchema {
    workout: Boolean
    recap: Date
}

type meditationSchema {
    meditation: Boolean
    recap: Date
}

type mealsSchema {
    meals: Boolean
    recap: Date
}

type dailyFormSchema {
    formID: ID
    music: Boolean
    workout: Boolean
    meditation: Boolean
    meals: Boolean
    recap: [recapSchema]
}

type Auth {
    token: ID!
    user: User
  }


type Query {
    me: User
    recap: Form
}

type Mutation {
  signUp(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  removeUser: User
}`;

module.exports = typeDefs;