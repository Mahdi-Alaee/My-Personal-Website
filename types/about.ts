export interface EducationType {
  _id: string;
  degree?: string | null;
  description?: string | null;
  related_link_text?: string | null;
  related_link_url?: string | null;
  start_end_date?: string | null;
  university?: string | null;
}

export interface ExperienceType {
  _id: string;
  company?: string | null;
  description?: string | null;
  related_link_text?: string | null;
  related_link_url?: string | null;
  start_end_date?: string | null;
  work?: string | null;
}
