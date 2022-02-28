const { gql } = require('apollo-server-express');

const typeDefs = gql`
input SettingsInput{
    music:Boolean
    meals:Boolean
    substance:Boolean
    meditation:Boolean
    exercise:Boolean
    reminders:Boolean
}
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dailyForm: [dailyFormSchema]
    settings: [Settings]
}

type Settings{
    music:Boolean
    meals:Boolean
    substance:Boolean
    meditation:Boolean
    exercise:Boolean
    reminders:Boolean
}

type dailyFormSchema {
    formID: ID
    createdAt: String
    feeling: Int
}

type Auth {
    token: ID!
    user: User
  }


type Query {
    me: User
    recap: User
}

type Mutation {

    signUp(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeUser: User
    updateSettings(input: SettingsInput!): User
    addDailyForm(createdAt: String!, feeling: Int!): User
  }`;

module.exports = typeDefs;