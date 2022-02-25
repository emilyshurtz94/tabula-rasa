const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dailyForm: [dailyFormSchema]
    settings: SettingsInput
}
input SettingsInput{
    music:Boolean
    meals:Boolean
    substance:Boolean
    meditation:Boolean
    exercise:Boolean
    reminders:Boolean
}

type dailyFormSchema {
    formID: ID
    feeling:
    createdAt: Date
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
    updateSettings:(settingsData: SettingsInput!): User
  }`;

module.exports = typeDefs;