import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FORM = gql`
  mutation addForm($feeling: Number!, $createdAt: Date!) {
    addUser(username: $feeling, email: $createdAt) {
      token
      form {
        formID
        feeling
        createdAt
      }
    }
  }
`;

export const UPDATE_SETTINGS = gql`
  mutation updateSettings($input: SettingsInput!){
    updateSettings(input:$input){
      _id
      username
      email
      password
      settings{
        music
        meals
        meditation
        substanceUse
        exercise
      }
    }
  }
`;

