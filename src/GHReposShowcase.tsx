import React from "react";
import { createGlobalStyle } from "styled-components";
import { Container, Wrapper } from "./components/Wrapper";
import RepoCard from "./components/RepoCard";
import folder from "./folder.png";

// ? CSS RESET
const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export type languageColorsObject = {
  [key: string]: string;
};

export interface ComponentOptions {
  username: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  languagesColors?: languageColorsObject;
  folder?: string;
}

const componentOptions: ComponentOptions = {
  username: "",
  titleColor: "",
  descriptionColor: "",
  backgroundColor: "",
  languagesColors: {},
  folder: folder,
};

export const Options = React.createContext<ComponentOptions>(componentOptions);

export default function GHReposShowcase({
  username,
  titleColor,
  descriptionColor,
  backgroundColor,
  languagesColors,
  folder,
}: ComponentOptions) {
  const userOptions = React.useMemo(
    () => ({
      username,
      titleColor,
      descriptionColor,
      backgroundColor,
      languagesColors,
      folder,
    }),
    []
  );

  return (
    <Options.Provider value={userOptions}>
      <Container>
        <Wrapper>
          <RepoCard />
        </Wrapper>
      </Container>
      <GlobalStyles />
    </Options.Provider>
  );
}
GHReposShowcase.defaultProps = {
  titleColor: "",
  descriptionColor: "",
  backgroundColor: "",
  languagesColors: {
    TypeScript: "#5ccfe6",
    JavaScript: "#ef6b73",
    PHP: "#c3a6ff",
    Vue: "#41b380",
    HTML: "#eab676",
    Python: "#ef4528",
    Java: "#edd157",
  },
  folder: folder,
};
