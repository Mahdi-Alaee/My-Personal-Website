export interface EBoxType {
  id: string;
  date: string;
  title1: string;
  title2: string;
  desription: string;
  icon: "work" | "education";
  relatedLinks: {
    id: string;
    href: string;
    text: string;
  }[];
}

export interface EducationType {
  _id: string;
  degree?: string | null;
  description?: string | null;
  related_link_text?: string | null;
  related_link_url?: string | null;
  start_end_date?: string | null;
  university?: string | null;
}
