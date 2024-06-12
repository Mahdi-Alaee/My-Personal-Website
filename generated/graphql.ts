/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The DateTime type adheres to ISO 8601 standard. */
  _DateTime: { input: any; output: any; }
};

/** This union type holds all content models. */
export type AllModels = Article;

/** Single Article. */
export type Article = Model & {
  __typename?: 'Article';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs: Scalars['Int']['output'];
  /** Count of comment events. */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Article>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /** Count of vote events. */
  _votes: Scalars['Int']['output'];
  banner?: Maybe<Asset>;
  body?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  shortname?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum ArticleSortInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  ShortnameAsc = 'shortname_ASC',
  ShortnameDesc = 'shortname_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ArticleWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<ArticleWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  body_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  body_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  body_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  description_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  shortname?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  shortname_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  shortname_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  shortname_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  shortname_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  shortname_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Articles items. */
export type Articles = {
  __typename?: 'Articles';
  items: Array<Article>;
  total: Scalars['Int']['output'];
};

/** Prepr Asset system model */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String']['output'];
  _type: Scalars['String']['output'];
  /** Contextual field; alignment of the asset when used in a content item. */
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']['output']>;
  /** Contextual field; caption of the asset when used in a content item. */
  caption?: Maybe<Scalars['String']['output']>;
  /** Returns a cover image for audio/video files. */
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Prepr Asset system model */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Float']['input']>;
  fit_mode?: InputMaybe<Scalars['String']['input']>;
  flip_h?: InputMaybe<Scalars['Boolean']['input']>;
  flip_v?: InputMaybe<Scalars['Boolean']['input']>;
  fps?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Prepr Asset system model */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars['Boolean']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  preset?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  res?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Context = {
  __typename?: 'Context';
  countries?: Maybe<Array<Scalars['String']['output']>>;
  /** The unique identifier for an A/B test or personalization block used for analytics. */
  group_id?: Maybe<Scalars['String']['output']>;
  /** Returns the kind of personalized content: `PERSONALIZATION` | A`B_TEST`. */
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  /** A variant ID is a unique identifier assigned to each variant in an A/B test (A/B) or personalization. */
  variant_id?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for an A/B test or personalization variant used for analytics. */
  variant_key?: Maybe<Scalars['String']['output']>;
};

/** The Customer Relation type is specifying the kind of relationship between the customer and your content. */
export enum CustomerRelationType {
  Bookmarked = 'BOOKMARKED',
  Clicked = 'CLICKED',
  Commented = 'COMMENTED',
  Liked = 'LIKED',
  Purchased = 'PURCHASED',
  Shared = 'SHARED',
  Subscribed = 'SUBSCRIBED',
  Viewed = 'VIEWED',
  Voted = 'VOTED'
}

export type CustomerRelationWhereInput = {
  _type?: InputMaybe<CustomerRelationType>;
  id?: InputMaybe<Scalars['String']['input']>;
  reference_id?: InputMaybe<Scalars['String']['input']>;
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single Article. */
  Article?: Maybe<Article>;
  /** Retrieve multiple Articles. */
  Articles?: Maybe<Articles>;
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<ContentItems>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  PeopleAlsoViewed_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending globally popular Articles */
  Popular_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  Similar_Articles?: Maybe<Articles>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSortInput>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryPeopleAlsoViewed_ArticlesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryPopular_ArticlesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QuerySimilar_ArticlesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  includeReferences?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', Articles?: { __typename?: 'Articles', total: number, items: Array<{ __typename?: 'Article', title?: string | null }> } | null };


export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;