export interface Portfolio {
  // id: string;
  // title: string;
  // banner: string;
  // project: string;
  // client: string;
  // languagesAndTools: string;
  // link: {
  //   href: string;
  //   text: string;
  // };

  title?: string | null;
  description?: string | null;
  client?: string | null;
  preview?: string | null;
  tags?: Array<{
    _id?: string | null;
    body?: string | null;
    slug?: string | null;
  } | null> | null;
  banner?: {
    url?: string | null;
  } | null;
}
