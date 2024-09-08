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
export type AllModels = Article | Contact | Education | Experience | Portfolio | Skill;

/** Single Article. */
export type Article = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  items: Array<Article>;
  total: Scalars['Int']['output'];
};

/** Prepr Asset system model */
export type Asset = {
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
  inline?: InputMaybe<Scalars['Boolean']['input']>;
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

/** Single Contact. */
export type Contact = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  _localizations: Array<Contact>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export enum ContactSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  SubjectAsc = 'subject_ASC',
  SubjectDesc = 'subject_DESC'
}

export type ContactWhereInput = {
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
  _or?: InputMaybe<Array<ContactWhereInput>>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  email_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  message_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  message_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  message_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  message_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  subject_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  subject_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  subject_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  subject_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  subject_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Contacts items. */
export type Contacts = {
  items: Array<Contact>;
  total: Scalars['Int']['output'];
};

export type ContentItems = {
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
  countries?: Maybe<Array<Scalars['String']['output']>>;
  /** The unique identifier for an A/B test or personalization block used for analytics. */
  group_id?: Maybe<Scalars['String']['output']>;
  /** Returns the kind of personalized content: `PERSONALIZATION` | `AB_TEST`. */
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  /** A variant ID is a unique identifier assigned to each variant in an A/B test (A/B) or personalization and contains the segments it has been linked too. */
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

/** Single Education. */
export type Education = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  _localizations: Array<Education>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  degree?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  related_link_text?: Maybe<Scalars['String']['output']>;
  related_link_url?: Maybe<Scalars['String']['output']>;
  start_end_date?: Maybe<Scalars['String']['output']>;
  university?: Maybe<Scalars['String']['output']>;
};

export enum EducationSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  DegreeAsc = 'degree_ASC',
  DegreeDesc = 'degree_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  RelatedLinkTextAsc = 'related_link_text_ASC',
  RelatedLinkTextDesc = 'related_link_text_DESC',
  RelatedLinkUrlAsc = 'related_link_url_ASC',
  RelatedLinkUrlDesc = 'related_link_url_DESC',
  StartEndDateAsc = 'start_end_date_ASC',
  StartEndDateDesc = 'start_end_date_DESC',
  UniversityAsc = 'university_ASC',
  UniversityDesc = 'university_DESC'
}

export type EducationWhereInput = {
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
  _or?: InputMaybe<Array<EducationWhereInput>>;
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
  degree?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  degree_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  degree_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  degree_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  degree_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  degree_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  related_link_text?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  related_link_text_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  related_link_text_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  related_link_text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  related_link_text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  related_link_text_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  related_link_url?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  related_link_url_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  related_link_url_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  related_link_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  related_link_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  related_link_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  start_end_date?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  start_end_date_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  start_end_date_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  start_end_date_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  start_end_date_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  start_end_date_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  university?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  university_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  university_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  university_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  university_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  university_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Educations items. */
export type Educations = {
  items: Array<Education>;
  total: Scalars['Int']['output'];
};

/** Single Experience. */
export type Experience = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  _localizations: Array<Experience>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  company?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  related_link_text?: Maybe<Scalars['String']['output']>;
  related_link_url?: Maybe<Scalars['String']['output']>;
  start_end_date?: Maybe<Scalars['String']['output']>;
  work?: Maybe<Scalars['String']['output']>;
};

export enum ExperienceSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  RelatedLinkTextAsc = 'related_link_text_ASC',
  RelatedLinkTextDesc = 'related_link_text_DESC',
  RelatedLinkUrlAsc = 'related_link_url_ASC',
  RelatedLinkUrlDesc = 'related_link_url_DESC',
  StartEndDateAsc = 'start_end_date_ASC',
  StartEndDateDesc = 'start_end_date_DESC',
  WorkAsc = 'work_ASC',
  WorkDesc = 'work_DESC'
}

export type ExperienceWhereInput = {
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
  _or?: InputMaybe<Array<ExperienceWhereInput>>;
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
  company?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  company_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  company_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  company_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  company_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  related_link_text?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  related_link_text_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  related_link_text_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  related_link_text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  related_link_text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  related_link_text_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  related_link_url?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  related_link_url_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  related_link_url_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  related_link_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  related_link_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  related_link_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  start_end_date?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  start_end_date_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  start_end_date_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  start_end_date_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  start_end_date_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  start_end_date_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  work?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  work_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  work_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  work_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  work_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  work_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Experiences items. */
export type Experiences = {
  items: Array<Experience>;
  total: Scalars['Int']['output'];
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

/** Single Portfolio. */
export type Portfolio = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  _localizations: Array<Portfolio>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  banner?: Maybe<Asset>;
  client?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum PortfolioSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PreviewAsc = 'preview_ASC',
  PreviewDesc = 'preview_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PortfolioWhereInput = {
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
  _or?: InputMaybe<Array<PortfolioWhereInput>>;
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
  client?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  client_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  client_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  client_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  client_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  client_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  preview?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  preview_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  preview_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  preview_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  preview_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  preview_starts_with?: InputMaybe<Scalars['String']['input']>;
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

/** List of Portfolios items. */
export type Portfolios = {
  items: Array<Portfolio>;
  total: Scalars['Int']['output'];
};

export type Query = {
  /** Retrieve a single Article. */
  Article?: Maybe<Article>;
  /** Retrieve multiple Articles. */
  Articles?: Maybe<Articles>;
  /** Retrieve a single Contact. */
  Contact?: Maybe<Contact>;
  /** Retrieve multiple Contacts. */
  Contacts?: Maybe<Contacts>;
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve a single Education. */
  Education?: Maybe<Education>;
  /** Retrieve multiple Educations. */
  Educations?: Maybe<Educations>;
  /** Retrieve a single Experience. */
  Experience?: Maybe<Experience>;
  /** Retrieve multiple Experiences. */
  Experiences?: Maybe<Experiences>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  PeopleAlsoViewed_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending Contacts which are similar to the giving item */
  PeopleAlsoViewed_Contacts?: Maybe<Contacts>;
  /** Recommendation recipe suitable for recommending Educations which are similar to the giving item */
  PeopleAlsoViewed_Educations?: Maybe<Educations>;
  /** Recommendation recipe suitable for recommending Experiences which are similar to the giving item */
  PeopleAlsoViewed_Experiences?: Maybe<Experiences>;
  /** Recommendation recipe suitable for recommending Portfolios which are similar to the giving item */
  PeopleAlsoViewed_Portfolios?: Maybe<Portfolios>;
  /** Recommendation recipe suitable for recommending Skills which are similar to the giving item */
  PeopleAlsoViewed_Skills?: Maybe<Skills>;
  /** Recommendation recipe suitable for recommending globally popular Articles */
  Popular_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending globally popular Contacts */
  Popular_Contacts?: Maybe<Contacts>;
  /** Recommendation recipe suitable for recommending globally popular Educations */
  Popular_Educations?: Maybe<Educations>;
  /** Recommendation recipe suitable for recommending globally popular Experiences */
  Popular_Experiences?: Maybe<Experiences>;
  /** Recommendation recipe suitable for recommending globally popular Portfolios */
  Popular_Portfolios?: Maybe<Portfolios>;
  /** Recommendation recipe suitable for recommending globally popular Skills */
  Popular_Skills?: Maybe<Skills>;
  /** Retrieve a single Portfolio. */
  Portfolio?: Maybe<Portfolio>;
  /** Retrieve multiple Portfolios. */
  Portfolios?: Maybe<Portfolios>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  Similar_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending Contacts which are similar to the giving item */
  Similar_Contacts?: Maybe<Contacts>;
  /** Recommendation recipe suitable for recommending Educations which are similar to the giving item */
  Similar_Educations?: Maybe<Educations>;
  /** Recommendation recipe suitable for recommending Experiences which are similar to the giving item */
  Similar_Experiences?: Maybe<Experiences>;
  /** Recommendation recipe suitable for recommending Portfolios which are similar to the giving item */
  Similar_Portfolios?: Maybe<Portfolios>;
  /** Recommendation recipe suitable for recommending Skills which are similar to the giving item */
  Similar_Skills?: Maybe<Skills>;
  /** Retrieve a single Skill. */
  Skill?: Maybe<Skill>;
  /** Retrieve multiple Skills. */
  Skills?: Maybe<Skills>;
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


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContactsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContactSortInput>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryEducationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEducationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<EducationSortInput>;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryExperienceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExperiencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ExperienceSortInput>;
  where?: InputMaybe<ExperienceWhereInput>;
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


export type QueryPeopleAlsoViewed_ContactsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryPeopleAlsoViewed_EducationsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryPeopleAlsoViewed_ExperiencesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryPeopleAlsoViewed_PortfoliosArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortfolioWhereInput>;
};


export type QueryPeopleAlsoViewed_SkillsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillWhereInput>;
};


export type QueryPopular_ArticlesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryPopular_ContactsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryPopular_EducationsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryPopular_ExperiencesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryPopular_PortfoliosArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortfolioWhereInput>;
};


export type QueryPopular_SkillsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillWhereInput>;
};


export type QueryPortfolioArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPortfoliosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PortfolioSortInput>;
  where?: InputMaybe<PortfolioWhereInput>;
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


export type QuerySimilar_ContactsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QuerySimilar_EducationsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationWhereInput>;
};


export type QuerySimilar_ExperiencesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QuerySimilar_PortfoliosArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortfolioWhereInput>;
};


export type QuerySimilar_SkillsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillWhereInput>;
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySkillsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SkillSortInput>;
  where?: InputMaybe<SkillWhereInput>;
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

/** Single Skill. */
export type Skill = Model & {
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
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
  _localizations: Array<Skill>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  percentage?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum SkillSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PercentageAsc = 'percentage_ASC',
  PercentageDesc = 'percentage_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SkillWhereInput = {
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
  _or?: InputMaybe<Array<SkillWhereInput>>;
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
  percentage?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  percentage_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  percentage_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  percentage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  percentage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  percentage_starts_with?: InputMaybe<Scalars['String']['input']>;
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

/** List of Skills items. */
export type Skills = {
  items: Array<Skill>;
  total: Scalars['Int']['output'];
};

export type Tag = {
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

export type GetArticlesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQueryQuery = { Articles?: { total: number, items: Array<{ _id: string, title?: string | null, description?: string | null, body?: string | null, shortname?: string | null, tags?: Array<{ _id?: string | null, body?: string | null, slug?: string | null } | null> | null, banner?: { url?: string | null } | null }> } | null };

export type GetArticleQueryQueryVariables = Exact<{
  articleId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticleQueryQuery = { Article?: { title?: string | null, description?: string | null, body?: string | null, shortname?: string | null, tags?: Array<{ _id?: string | null, body?: string | null, slug?: string | null } | null> | null, banner?: { url?: string | null } | null } | null };

export type GetPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfoliosQuery = { Portfolios?: { items: Array<{ _id: string, title?: string | null, banner?: { url?: string | null } | null }> } | null };

export type GetPortfolioByIdQueryVariables = Exact<{
  portfolioId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPortfolioByIdQuery = { Portfolio?: { title?: string | null, description?: string | null, client?: string | null, preview?: string | null, tags?: Array<{ _id?: string | null, body?: string | null, slug?: string | null } | null> | null, banner?: { url?: string | null } | null } | null };

export type GetSkillsQueryVariables = Exact<{
  sort?: InputMaybe<SkillSortInput>;
}>;


export type GetSkillsQuery = { Skills?: { items: Array<{ _id: string, title?: string | null, percentage?: string | null }> } | null };

export type GetEducationsQueryVariables = Exact<{
  sort?: InputMaybe<EducationSortInput>;
}>;


export type GetEducationsQuery = { Educations?: { items: Array<{ _id: string, degree?: string | null, description?: string | null, related_link_text?: string | null, related_link_url?: string | null, start_end_date?: string | null, university?: string | null }> } | null };

export type GetExperiencesQueryVariables = Exact<{
  sort?: InputMaybe<ExperienceSortInput>;
}>;


export type GetExperiencesQuery = { Experiences?: { items: Array<{ _id: string, company?: string | null, description?: string | null, related_link_text?: string | null, related_link_url?: string | null, start_end_date?: string | null, work?: string | null }> } | null };


export const GetArticlesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticlesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortname"}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetArticlesQueryQuery, GetArticlesQueryQueryVariables>;
export const GetArticleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortname"}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQueryQuery, GetArticleQueryQueryVariables>;
export const GetPortfoliosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPortfolios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Portfolios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPortfoliosQuery, GetPortfoliosQueryVariables>;
export const GetPortfolioByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPortfolioById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Portfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]}}]} as unknown as DocumentNode<GetPortfolioByIdQuery, GetPortfolioByIdQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillSortInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"percentage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetEducationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEducations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EducationSortInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Educations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"related_link_text"}},{"kind":"Field","name":{"kind":"Name","value":"related_link_url"}},{"kind":"Field","name":{"kind":"Name","value":"start_end_date"}},{"kind":"Field","name":{"kind":"Name","value":"university"}}]}}]}}]}}]} as unknown as DocumentNode<GetEducationsQuery, GetEducationsQueryVariables>;
export const GetExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getExperiences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceSortInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Experiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"related_link_text"}},{"kind":"Field","name":{"kind":"Name","value":"related_link_url"}},{"kind":"Field","name":{"kind":"Name","value":"start_end_date"}},{"kind":"Field","name":{"kind":"Name","value":"work"}}]}}]}}]}}]} as unknown as DocumentNode<GetExperiencesQuery, GetExperiencesQueryVariables>;