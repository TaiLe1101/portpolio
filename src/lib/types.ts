import { links } from "../lib/data";

export type SectionName = (typeof links)[number]["hash"];

export type Link = {
  nameEng: string;
  hash: string;
};

export type ProjectInfo = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export type ResponseApi<T> = {
  statusCode: number;
  message: string[];
  error: string;
  data: T;
};

export type ConfigType = {
  id: number;
  welcomeText: string;
  subWelcomeText: string;
  aboutText: string;
  aboutText2: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PortfolioSkillType = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
