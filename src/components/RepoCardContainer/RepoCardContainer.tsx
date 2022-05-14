import styled from "styled-components";
import { lightenDarkenColor } from "./lighten-color";

export type RepoCardContainerProperties = {
  backgroundColor?: string;
  boxShadowColor?: string;
  homepage?: boolean;
};

const RepoWrapper = styled.div<RepoCardContainerProperties>`
  width: 350px;
  height: 12.5rem;
  background-color: ${(properties) => properties.backgroundColor || "#1d2433"};
  border: 1px solid
    ${(properties) =>
      properties.backgroundColor
        ? lightenDarkenColor(properties.backgroundColor, 20)
        : lightenDarkenColor("#1d2433", 20)};
  border-radius: 5px;
  box-shadow: 3px 3px ${(properties) => properties.boxShadowColor || "#a2aabc"};
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin: 1rem;

  &:last-of-type {
    margin-right: auto;
  }

  @media (max-width: 1024px) {
    margin: 1rem auto;
  }
`;

const TitlesWrapper = styled.div`
  padding: 0 1rem;
`;

const ButtonsWrapper = styled.div<Pick<RepoCardContainerProps, "homepage">>`
  padding: 0 1rem;
  display: flex;
  justify-content: ${(properties) =>
    properties.homepage ? "space-between" : "flex-start"};
`;

const RepoCardContainer = {
  RepoWrapper,
  TitlesWrapper,
  ButtonsWrapper,
};

export default RepoCardContainer;
