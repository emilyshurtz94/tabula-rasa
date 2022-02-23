const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Login {
    _id: ID
    email: Sring
    password: String
}

type Home {
    _id: ID
    
}

type Form {
    _id: ID
}

type Query {
    login: [Login]
    home: [Home]
    form: [Form]
}`;

module.exports = typeDefs;