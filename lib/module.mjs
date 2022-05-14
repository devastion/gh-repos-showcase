import {
  jsxs as $d7sUl$jsxs,
  jsx as $d7sUl$jsx,
  Fragment as $d7sUl$Fragment,
} from "react/jsx-runtime";
import $d7sUl$react from "react";
import $d7sUl$styledcomponents, {
  createGlobalStyle as $d7sUl$createGlobalStyle,
} from "styled-components";
import { useEffectOnce as $d7sUl$useEffectOnce } from "usehooks-ts";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $670f7869c2fdeea9$export$e6dfd72ab29f8598 = $d7sUl$styledcomponents.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap");

  font-family: "Fira Code", monospace;
  display: flex;
  flex-flow: column wrap;
  margin-right: 3px;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }

  @media (min-width: 1280px) {
    width: 72rem;
  }
`;
const $670f7869c2fdeea9$export$42a852a2b6b56249 = $d7sUl$styledcomponents.section`
  display: flex;
  justify-content: center;
`;

const $8dd483707bc51ae7$export$215309ed41a7fa73 = (col, amt) => {
  let usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

const $1b0ec5d852eee0db$var$RepoWrapper = $d7sUl$styledcomponents.div`
  width: 350px;
  height: 12.5rem;
  background-color: ${(properties) => properties.backgroundColor || "#1d2433"};
  border: 1px solid
    ${(properties) =>
      properties.backgroundColor
        ? $8dd483707bc51ae7$export$215309ed41a7fa73(
            properties.backgroundColor,
            20
          )
        : $8dd483707bc51ae7$export$215309ed41a7fa73("#1d2433", 20)};
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
const $1b0ec5d852eee0db$var$TitlesWrapper = $d7sUl$styledcomponents.div`
  padding: 0 1rem;
`;
const $1b0ec5d852eee0db$var$ButtonsWrapper = $d7sUl$styledcomponents.div`
  padding: 0 1rem;
  display: flex;
  justify-content: ${(properties) =>
    properties.homepage ? "space-between" : "flex-start"};
`;
const $1b0ec5d852eee0db$var$RepoCardContainer = {
  RepoWrapper: $1b0ec5d852eee0db$var$RepoWrapper,
  TitlesWrapper: $1b0ec5d852eee0db$var$TitlesWrapper,
  ButtonsWrapper: $1b0ec5d852eee0db$var$ButtonsWrapper,
};
var $1b0ec5d852eee0db$export$2e2bcd8739ae039 =
  $1b0ec5d852eee0db$var$RepoCardContainer;

const $d8e010812879026c$var$H1 = $d7sUl$styledcomponents.h1`
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
const $d8e010812879026c$var$H2 = $d7sUl$styledcomponents.h2`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.625rem 0;
  color: ${(properties) => properties.descriptionColor || "#d7dce2"};
  line-height: 1.125rem;
`;
const $d8e010812879026c$var$H3 = $d7sUl$styledcomponents.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(properties) => properties.languageColor || "#a2aabc"};
`;
const $d8e010812879026c$var$description = (text) =>
  text && text.length > 55 ? `${text.slice(0, 55).trim()}...` : `${text}`;
const $d8e010812879026c$var$Titles = {
  H1: $d8e010812879026c$var$H1,
  H2: $d8e010812879026c$var$H2,
  H3: $d8e010812879026c$var$H3,
  description: $d8e010812879026c$var$description,
};
var $d8e010812879026c$export$2e2bcd8739ae039 = $d8e010812879026c$var$Titles;

const $01b714bb144f6af4$var$RepoCardButton = $d7sUl$styledcomponents.button`
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
var $01b714bb144f6af4$export$2e2bcd8739ae039 =
  $01b714bb144f6af4$var$RepoCardButton;

var $93b0fea744d88efb$exports = {};
$93b0fea744d88efb$exports = new URL(
  "folder.ae8480da.png",
  import.meta.url
).toString();

function $4e6ff42dc2ea3167$export$2e2bcd8739ae039() {
  const [repos, setRepos] = $d7sUl$react.useState([]);
  const options = $d7sUl$react.useContext(
    $7efbe66b3a050202$export$c019608e5b5bb4cb
  );
  const {
    username: username,
    titleColor: titleColor,
    descriptionColor: descriptionColor,
    backgroundColor: backgroundColor,
    languagesColors: languagesColors,
  } = options;
  const GITHUB_API_URL = `https://api.github.com/users/${username}/repos`;
  // const getRepos = async () => {
  //   await fetch(GITHUB_API_URL)
  //     .then(async (response) => (await response.json()) as Repo[])
  //     .then((data) => setRepos(data))
  //     .catch((error) => console.error(error));
  // };
  $d7sUl$useEffectOnce(() => {
    (async function getRepos() {
      await fetch(GITHUB_API_URL)
        .then(async (response) => await response.json())
        .then((data) => setRepos(data));
    })();
  });
  const handleOnClick = (url) => (_event) => window.open(url, "_blank");
  const getLangColor = (lang) => languagesColors && languagesColors[lang];
  const renderRepos = repos?.map(
    ({
      id: id,
      name: name,
      description: description,
      language: language,
      homepage: homepage,
      html_url: html_url,
    }) => {
      const color = getLangColor(language);
      return /*#__PURE__*/ $d7sUl$jsxs(
        $1b0ec5d852eee0db$export$2e2bcd8739ae039.RepoWrapper,
        {
          backgroundColor: backgroundColor,
          boxShadowColor: color,
          children: [
            /*#__PURE__*/ $d7sUl$jsxs(
              $1b0ec5d852eee0db$export$2e2bcd8739ae039.TitlesWrapper,
              {
                children: [
                  /*#__PURE__*/ $d7sUl$jsxs(
                    $d8e010812879026c$export$2e2bcd8739ae039.H1,
                    {
                      titleColor: titleColor,
                      children: [
                        /*#__PURE__*/ $d7sUl$jsx("img", {
                          src: /*@__PURE__*/ $parcel$interopDefault(
                            $93b0fea744d88efb$exports
                          ),
                          alt: "folder",
                          width: "38px",
                          height: "36px",
                        }),
                        name,
                      ],
                    }
                  ),
                  /*#__PURE__*/ $d7sUl$jsx(
                    $d8e010812879026c$export$2e2bcd8739ae039.H2,
                    {
                      descriptionColor: descriptionColor,
                      children:
                        $d8e010812879026c$export$2e2bcd8739ae039.description(
                          description
                        ),
                    }
                  ),
                  /*#__PURE__*/ $d7sUl$jsx(
                    $d8e010812879026c$export$2e2bcd8739ae039.H3,
                    {
                      languageColor: color,
                      children: language,
                    }
                  ),
                ],
              }
            ),
            /*#__PURE__*/ $d7sUl$jsxs(
              $1b0ec5d852eee0db$export$2e2bcd8739ae039.ButtonsWrapper,
              {
                homepage: !!homepage,
                children: [
                  homepage &&
                    /*#__PURE__*/ $d7sUl$jsx(
                      $01b714bb144f6af4$export$2e2bcd8739ae039,
                      {
                        onClick: handleOnClick(homepage),
                        bgColor: color,
                        children: "Live demo",
                      }
                    ),
                  /*#__PURE__*/ $d7sUl$jsx(
                    $01b714bb144f6af4$export$2e2bcd8739ae039,
                    {
                      onClick: handleOnClick(html_url),
                      bgColor: color,
                      children: "Github Repo",
                    }
                  ),
                ],
              }
            ),
          ],
        },
        id
      );
    }
  );
  return /*#__PURE__*/ $d7sUl$jsx($d7sUl$Fragment, {
    children: renderRepos,
  });
}

// ? CSS RESET
const $7efbe66b3a050202$var$GlobalStyles = $d7sUl$createGlobalStyle`
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
const $7efbe66b3a050202$var$componentOptions = {
  username: "",
  titleColor: "",
  descriptionColor: "",
  backgroundColor: "",
  languagesColors: {},
};
const $7efbe66b3a050202$export$c019608e5b5bb4cb =
  /*#__PURE__*/ $d7sUl$react.createContext(
    $7efbe66b3a050202$var$componentOptions
  );
function $7efbe66b3a050202$export$2e2bcd8739ae039({
  username: username,
  titleColor: titleColor,
  descriptionColor: descriptionColor,
  backgroundColor: backgroundColor,
  languagesColors: languagesColors,
}) {
  const userOptions = $d7sUl$react.useMemo(
    () => ({
      username: username,
      titleColor: titleColor,
      descriptionColor: descriptionColor,
      backgroundColor: backgroundColor,
      languagesColors: languagesColors,
    }),
    []
  );
  return /*#__PURE__*/ $d7sUl$jsxs(
    $7efbe66b3a050202$export$c019608e5b5bb4cb.Provider,
    {
      value: userOptions,
      children: [
        /*#__PURE__*/ $d7sUl$jsx($670f7869c2fdeea9$export$42a852a2b6b56249, {
          children: /*#__PURE__*/ $d7sUl$jsx(
            $670f7869c2fdeea9$export$e6dfd72ab29f8598,
            {
              children: /*#__PURE__*/ $d7sUl$jsx(
                $4e6ff42dc2ea3167$export$2e2bcd8739ae039,
                {}
              ),
            }
          ),
        }),
        /*#__PURE__*/ $d7sUl$jsx($7efbe66b3a050202$var$GlobalStyles, {}),
      ],
    }
  );
}
$7efbe66b3a050202$export$2e2bcd8739ae039.defaultProps = {
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
};

export {
  $7efbe66b3a050202$export$c019608e5b5bb4cb as Options,
  $7efbe66b3a050202$export$2e2bcd8739ae039 as default,
};
//# sourceMappingURL=module.mjs.map
