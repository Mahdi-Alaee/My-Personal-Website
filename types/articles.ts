// export interface Article {
//   title?: string | null;
//   description?: string;
//   body?: string;
//   tags?: ArticleTag[];
//   shortname?: string;
//   banner?: { url: string };
// }

// export interface ArticleTag {
//   _id: string;
//   body: string;
//   slug: string;
// }

export interface Article {
  _id: string;
  title?: string | null;
  description?: string | null;
  body?: string | null;
  shortname?: string | null;
  tags?: Array<{
    _id?: string | null;
    body?: string | null;
    slug?: string | null;
  } | null> | null;
  banner?: { url?: string | null } | null;
}
