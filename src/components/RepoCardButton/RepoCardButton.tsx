import styled from "styled-components";

export type RepoCardButtonProps = {
  bgColor?: string;
};

const RepoCardButton = styled.button<Pick<RepoCardButtonProps, "bgColor">>`
  width: 8.75rem;
  height: 2.5rem;
  background-color: #2f3b54;
  border: 1px solid #1d2433;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(properties) => properties.bgColor || "#a2aabc"};
  font-family: "Fira Code", monospace;
  font-weight: 600;

  &:hover {
    background-color: ${(properties) => properties.bgColor || "#a2aabc"};
    color: #2f3b54;
  }
`;

export const LoadMoreButton = styled.button<
  Pick<RepoCardButtonProps, "bgColor">
>`
  width: 8.75rem;
  height: 2.5rem;
  background-color: #2f3b54;
  border: 1px solid #1d2433;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(properties) => properties.bgColor || "#a2aabc"};
  font-family: "Fira Code", monospace;
  font-weight: 600;
  margin: auto;
  &:hover {
    background-color: ${(properties) => properties.bgColor || "#a2aabc"};
    color: #2f3b54;
  }
`;

export default RepoCardButton;
