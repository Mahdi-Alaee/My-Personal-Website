export interface EBoxType {
    date: string;
    title1: string;
    title2: string;
    desription: string;
    icon: "work" | "education";
    relatedLinks: {
      id: string;
      href:string,
      text:string
    }[];
    id?: number;
  }
  