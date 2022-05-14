import styled from "styled-components";

export type RepoCardTitlesProps = {
  languageColor?: string;
  descriptionColor?: string;
  titleColor?: string;
};

const H1 = styled.h1<Pick<RepoCardTitlesProps, "titleColor">>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(properties) => properties.titleColor || "#e5e5e5"};
  display: flex;
  align-items: center;
  padding-bottom: 0.625rem;

  img {
    margin-right: 10px;
  }
`;

const H2 = styled.h2<Pick<RepoCardTitlesProps, "descriptionColor">>`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.625rem 0;
  color: ${(properties) => properties.descriptionColor || "#d7dce2"};
  line-height: 1.125rem;
`;

const H3 = styled.h3<Pick<RepoCardTitlesProps, "languageColor">>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(properties) => properties.languageColor || "#a2aabc"};
`;

const description = (text: string) =>
  text && text.length > 55 ? `${text.slice(0, 55).trim()}...` : `${text}`;

const Titles = { H1, H2, H3, description };

export default Titles;
