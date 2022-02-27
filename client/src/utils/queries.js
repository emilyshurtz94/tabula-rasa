import { gql } from '@apollo/client';

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
      settings{
        music
        meals
        substance
        meditation
        exercise
        reminders
      }
    }
  }
`;

// export const QUERY_ = gql`
//   query  {
    
//   }
// `;