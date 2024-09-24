import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "ePort",
    description:
      "Là cổng thông tin cảng, với các chức năng mạnh mẽ về lĩnh vực tạo lệnh hạ nhập tàu, container và tối ưu hoá việc tạo hoá đơn trên môi trường Internet",
    imageUrl: "/eport.png",
    link: "https://eport.haiphongport.com.vn/",
    tags: ["C#", "ASP.NET", "SQL"],
  },
  {
    title: "DevT Blog",
    description:
      "Là trang blog cá nhân, được xây dựng dựa trên NextJs, TailwindCSS,...",
    imageUrl: "/devt-blog.png",
    link: "https://devtblog.vercel.app/",
    tags: ["Typescript", "NextJs", "TailwindCSS"],
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "C#",
  "Java",
  "SQL",
  "MongoDB",
  "MySQL",
  "ReactJs",
  "NextJs",
  "ExpressJs",
  "...",
];
