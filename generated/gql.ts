/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getArticlesQuery {\n      Articles {\n        items {\n          _id\n          title\n          description\n          body\n          tags {\n            _id\n            body\n            slug\n          }\n          shortname\n          banner {\n            url\n          }\n        }\n        total\n      }\n    }\n  ": types.GetArticlesQueryDocument,
    "\n    query getArticleQuery($articleId: String) {\n      Article(id: $articleId) {\n        title\n        description\n        body\n        tags {\n          _id\n          body\n          slug\n        }\n        shortname\n        banner {\n          url\n        }\n      }\n    }\n  ": types.GetArticleQueryDocument,
    "\n    query getPortfolios {\n      Portfolios {\n        items {\n          _id\n          title\n          banner {\n            url\n          }\n        }\n      }\n    }\n  ": types.GetPortfoliosDocument,
    "\n    query getPortfolioById($portfolioId: String) {\n      Portfolio(id: $portfolioId) {\n        title\n        description\n        tags {\n          _id\n          body\n          slug\n        }\n        banner {\n          url\n        }\n        client\n        preview\n      }\n    }\n  ": types.GetPortfolioByIdDocument,
    "\n    query getSkills($sort: SkillSortInput) {\n      Skills(sort: $sort) {\n        items {\n          _id\n          title\n          percentage\n          _publish_on\n        }\n      }\n    }\n  ": types.GetSkillsDocument,
    "\n    query getEducations($sort: EducationSortInput) {\n      Educations(sort: $sort) {\n        items {\n          _id\n          degree\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          university\n        }\n      }\n    }\n  ": types.GetEducationsDocument,
    "\n    query getExperiences($sort: ExperienceSortInput) {\n      Experiences(sort: $sort) {\n        items {\n          _id\n          company\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          work\n        }\n      }\n    }\n  ": types.GetExperiencesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getArticlesQuery {\n      Articles {\n        items {\n          _id\n          title\n          description\n          body\n          tags {\n            _id\n            body\n            slug\n          }\n          shortname\n          banner {\n            url\n          }\n        }\n        total\n      }\n    }\n  "): (typeof documents)["\n    query getArticlesQuery {\n      Articles {\n        items {\n          _id\n          title\n          description\n          body\n          tags {\n            _id\n            body\n            slug\n          }\n          shortname\n          banner {\n            url\n          }\n        }\n        total\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getArticleQuery($articleId: String) {\n      Article(id: $articleId) {\n        title\n        description\n        body\n        tags {\n          _id\n          body\n          slug\n        }\n        shortname\n        banner {\n          url\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getArticleQuery($articleId: String) {\n      Article(id: $articleId) {\n        title\n        description\n        body\n        tags {\n          _id\n          body\n          slug\n        }\n        shortname\n        banner {\n          url\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPortfolios {\n      Portfolios {\n        items {\n          _id\n          title\n          banner {\n            url\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getPortfolios {\n      Portfolios {\n        items {\n          _id\n          title\n          banner {\n            url\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPortfolioById($portfolioId: String) {\n      Portfolio(id: $portfolioId) {\n        title\n        description\n        tags {\n          _id\n          body\n          slug\n        }\n        banner {\n          url\n        }\n        client\n        preview\n      }\n    }\n  "): (typeof documents)["\n    query getPortfolioById($portfolioId: String) {\n      Portfolio(id: $portfolioId) {\n        title\n        description\n        tags {\n          _id\n          body\n          slug\n        }\n        banner {\n          url\n        }\n        client\n        preview\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getSkills($sort: SkillSortInput) {\n      Skills(sort: $sort) {\n        items {\n          _id\n          title\n          percentage\n          _publish_on\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getSkills($sort: SkillSortInput) {\n      Skills(sort: $sort) {\n        items {\n          _id\n          title\n          percentage\n          _publish_on\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getEducations($sort: EducationSortInput) {\n      Educations(sort: $sort) {\n        items {\n          _id\n          degree\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          university\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getEducations($sort: EducationSortInput) {\n      Educations(sort: $sort) {\n        items {\n          _id\n          degree\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          university\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getExperiences($sort: ExperienceSortInput) {\n      Experiences(sort: $sort) {\n        items {\n          _id\n          company\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          work\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getExperiences($sort: ExperienceSortInput) {\n      Experiences(sort: $sort) {\n        items {\n          _id\n          company\n          description\n          related_link_text\n          related_link_url\n          start_end_date\n          work\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;