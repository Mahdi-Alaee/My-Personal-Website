import { graphql } from "@/generated/gql";
import {
  EducationSortInput,
  ExperienceSortInput,
  SkillSortInput,
} from "@/generated/graphql";
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
    // fetchPolicy: "no-cache",
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
    // fetchPolicy: "no-cache",
  });  

  return Article;
}

export async function getPortfolio() {
  const query = graphql(`
    query getPortfolios {
      Portfolios {
        items {
          _id
          title
          banner {
            url
          }
        }
      }
    }
  `);

  const {
    data: { Portfolios },
  } = await client.query({
    query,
    // fetchPolicy: "no-cache",
  });

  return Portfolios?.items;
}

export async function getPortfolioById(id: string) {
  const query = graphql(`
    query getPortfolioById($portfolioId: String) {
      Portfolio(id: $portfolioId) {
        title
        description
        tags {
          _id
          body
          slug
        }
        banner {
          url
        }
        client
        preview
      }
    }
  `);

  const {
    data: { Portfolio },
  } = await client.query({
    query,
    variables: {
      portfolioId: id,
    },
    // fetchPolicy: "no-cache",
  });  

  return Portfolio;
}

export async function getSkills() {
  const query = graphql(`
    query getSkills($sort: SkillSortInput) {
      Skills(sort: $sort) {
        items {
          _id
          title
          percentage
        }
      }
    }
  `);

  const {
    data: { Skills },
  } = await client.query({
    query,
    variables: {
      sort: SkillSortInput.PublishOnAsc,
    },
    // fetchPolicy: "no-cache",
  });

  return Skills?.items;
}

export async function getEducations() {
  const query = graphql(`
    query getEducations($sort: EducationSortInput) {
      Educations(sort: $sort) {
        items {
          _id
          degree
          description
          related_link_text
          related_link_url
          start_end_date
          university
        }
      }
    }
  `);

  const {
    data: { Educations },
  } = await client.query({
    query,
    variables: {
      sort: EducationSortInput.PublishOnDesc,
    },
    // fetchPolicy: "no-cache",
  });

  return Educations?.items;
}

export async function getExperiences() {
  const query = graphql(`
    query getExperiences($sort: ExperienceSortInput) {
      Experiences(sort: $sort) {
        items {
          _id
          company
          description
          related_link_text
          related_link_url
          start_end_date
          work
        }
      }
    }
  `);

  const {
    data: { Experiences },
  } = await client.query({
    query,
    variables: {
      sort: ExperienceSortInput.PublishOnDesc,
    },
    // fetchPolicy: "no-cache",
  });

  return Experiences?.items;
}
