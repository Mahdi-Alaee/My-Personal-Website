import { gql } from "@apollo/client";

export const getArticles = gql`
  query ExampleQuery {
    Articles {
      items {
        banner {
          url
        }
      }
      total
    }
  }
`;
