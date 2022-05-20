/* eslint-disable no-void */
import React from "react";
import { Options } from "../../GHReposShowcase";
import RepoCardContainer from "../RepoCardContainer";
import Titles from "../RepoCardTitles";
import RepoCardButton from "../RepoCardButton";

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  homepage: string;
  html_url: string;
}

export default function RepoCard() {
  const [repos, setRepos] = React.useState<Repo[] | undefined>([]);
  const [shown, setShown] = React.useState<number>(6);
  const options = React.useContext(Options);
  const {
    username,
    titleColor,
    descriptionColor,
    backgroundColor,
    languagesColors,
    folder,
  } = options;

  const GITHUB_API_URL = `https://api.github.com/users/${username}/repos`;
  // const getRepos = async () => {
  //   await fetch(GITHUB_API_URL)
  //     .then(async (response) => (await response.json()) as Repo[])
  //     .then((data) => setRepos(data))
  //     .catch((error) => console.error(error));
  // };

  React.useEffect(() => {
    void (async function getRepos() {
      await fetch(GITHUB_API_URL)
        .then(async (response) => (await response.json()) as Repo[])
        .then((data) => setRepos(data));
    })();
  }, [GITHUB_API_URL]);

  const handleOnClick = (url: string) => (_event: React.SyntheticEvent) =>
    window.open(url, "_blank");

  const getLangColor = (lang: string) =>
    languagesColors && languagesColors[lang];

  const renderRepos = repos
    ?.slice(0, shown)
    .map(({ id, name, description, language, homepage, html_url }) => {
      const color = getLangColor(language);

      return (
        <RepoCardContainer.RepoWrapper
          backgroundColor={backgroundColor}
          boxShadowColor={color}
          key={id}>
          <RepoCardContainer.TitlesWrapper>
            <Titles.H1 titleColor={titleColor}>
              <img src={folder} alt="folder" width="38px" height="36px" />
              {name}
            </Titles.H1>
            <Titles.H2 descriptionColor={descriptionColor}>
              {Titles.description(description)}
            </Titles.H2>
            <Titles.H3 languageColor={color}>{language}</Titles.H3>
          </RepoCardContainer.TitlesWrapper>
          <RepoCardContainer.ButtonsWrapper homepage={!!homepage}>
            {homepage && (
              <RepoCardButton onClick={handleOnClick(homepage)} bgColor={color}>
                Live demo
              </RepoCardButton>
            )}
            <RepoCardButton onClick={handleOnClick(html_url)} bgColor={color}>
              Github Repo
            </RepoCardButton>
          </RepoCardContainer.ButtonsWrapper>
        </RepoCardContainer.RepoWrapper>
      );
    });

  const handleMore = () => setShown(shown + 3);

  return (
    <>
      {renderRepos}
      <button type="button" onClick={handleMore}>
        load more
      </button>
    </>
  );
}
