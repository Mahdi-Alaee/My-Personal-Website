import { graphql } from "@/generated/gql";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql.prepr.io/6888e6130695f4dc23b019426b81f15661cfc5c8d858aa2702348a3d2a69bec5",
  cache: new InMemoryCache(),
});

export async function getArticles() {
  const query = graphql(`
    query getArticlesQuery {
      Articles {
        items {
          _id
          title
          description
          body
          tags {
            _id
            body
            slug
          }
          shortname
          banner {
            url
          }
        }
        total
      }
    }
  `);

  const {
    data: { Articles },
  } = await client.query({
    query,
  });

  return Articles;
}

export async function getArticle(id: string) {
  const query = graphql(`
    query getArticleQuery($articleId: String) {
      Article(id: $articleId) {
        title
        description
        body
        tags {
          _id
          body
          slug
        }
        shortname
        banner {
          url
        }
      }
    }
  `);
  const {
    data: { Article },
  } = await client.query({
    query,
    variables: {
      articleId: id,
    },
  });

  return Article;
}
