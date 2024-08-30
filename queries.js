import { gql } from '@apollo/client';

export const GET_NEWS = gql`
  query {
    news {
      id
      title
      content
      publishedAt
    }
  }
`;