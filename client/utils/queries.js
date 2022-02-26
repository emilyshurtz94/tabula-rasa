import { gql } from '@apollo/client';

import gql from 'graphql-tag';

export const QUERY_USER = gql`
  {
    me {
      _id
      username
      email
      dailyform {
        formID
        feeling
        createdAt
      }
    }
  }
`;

// export const QUERY_ = gql`
//   query  {
    
//   }
// `;