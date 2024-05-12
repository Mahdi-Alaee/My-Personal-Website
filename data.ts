import { Portfolio } from "./types/portfolio";

export const experiences = [
  {
    id: '1',
    date: "1401 - 1402",
    title1: "I-Job",
    title2: "Front-end developer",
    desription: "working as front-end developer in koorosh-pt project",
    icon: "work",
    relatedLinks: [
      {
        id: "1",
        href: "https://kooroshpt.ir/",
        text: "koorosh pt",
      },
    ],
  },
];

export const educations = [
  {
    id: '1',
    date: "1401 - 1404",
    title1: "DEPLOMA DEGREE",
    title2: "SHOHADA PROFESSIONAL ACADEMY",
    desription: "graduated in Field of Study of software engineering",
    icon: "education",
    relatedLinks: [
      {
        id: "1",
        href: "https://balad.ir/p/%D9%87%D9%86%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D8%AD%D8%B1%D9%81%D9%87-%D8%A7%DB%8C-%D8%B4%D9%87%D8%AF%D8%A7-shahriyar_school-PTNi1gMAyMKWKj",
        text: "هنرستان حرفه ای شهدا",
      },
    ],
  },
];

export const portfolio: Portfolio[] = [
  {
    id: '1',
    title: "Simple Personal Website",
    banner: "/images/simple-personal-website.png",
    project: "For Practicing HTML CSS",
    client: "No One",
    languagesAndTools: "HTML,CSS,JS,SwiperJs",
    link: {
      href: "http://mahdixxx.ineu.ir/",
      text: "Live",
    },
  },
  {
    id: '2',
    title: "Simple Personal Website2",
    banner: "/images/simple-personal-website.png",
    project: "For Practicing HTML CSS 2",
    client: "No One",
    languagesAndTools: "HTML,CSS,JS,SwiperJs",
    link: {
      href: "http://mahdixxx.ineu.ir/",
      text: "Live",
    },
  },
  {
    id: '3',
    title: "Simple Personal Website3",
    banner: "/images/simple-personal-website.png",
    project: "For Practicing HTML CSS 3",
    client: "No One",
    languagesAndTools: "HTML,CSS,JS,SwiperJs",
    link: {
      href: "http://mahdixxx.ineu.ir/",
      text: "Live",
    },
  },
];
