// * INTERFACES
declare interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  homepage: string;
  html_url: string;
}

declare interface ComponentOptions {
  username: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  languagesColors?: languageColorsObject;
}

declare module "*.png" {
  const value: string;
  export default value;
}

// * TYPES
declare type RepoCardTitlesProps = {
  languageColor?: string;
  descriptionColor?: string;
  titleColor?: string;
};

declare type RepoCardContainerProps = {
  backgroundColor?: string;
  boxShadowColor?: string;
  homepage?: boolean;
};

declare type RepoCardButtonProps = {
  bgColor?: string;
};

declare type languageColorsObject = {
  [key: string]: string;
};
