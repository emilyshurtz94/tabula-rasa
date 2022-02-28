import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    me {
      _id
      username
      email
      dailyForm {
        formID
        feeling
        createdAt
      }
      settings{
        music
        meals
        substanceUse
        meditation
        exercise
        therapy
      }
    }
  }
`;

// export const QUERY_ = gql`
//   query  {
    
//   }
// `;