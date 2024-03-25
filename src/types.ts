export interface MenuItem {
  to: string;
  icon: React.ReactNode;
  text: string;
}

//* redux types *//

export interface EBoxType {
  date: string;
  title1: string;
  title2: string;
  desription: string;
  icon: "work" | "education";
  id?: number;
}
