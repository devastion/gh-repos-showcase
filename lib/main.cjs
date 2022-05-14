var $i8qgn$swchelpers = require("@swc/helpers");
var $i8qgn$reactjsxruntime = require("react/jsx-runtime");
var $i8qgn$react = require("react");
var $i8qgn$styledcomponents = require("styled-components");
var $i8qgn$regeneratorruntime = require("regenerator-runtime");
var $i8qgn$usehooksts = require("usehooks-ts");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, "__esModule", { value: true, configurable: true });
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  });
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Options", function () {
  return $5207aa118e2b1623$export$c019608e5b5bb4cb;
});
$parcel$export(module.exports, "default", function () {
  return $5207aa118e2b1623$export$2e2bcd8739ae039;
});

function _templateObject() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    '\n  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap");\n\n  font-family: "Fira Code", monospace;\n  display: flex;\n  flex-flow: column wrap;\n  margin-right: 3px;\n\n  @media (min-width: 768px) {\n    flex-flow: row wrap;\n  }\n\n  @media (min-width: 1280px) {\n    width: 72rem;\n  }\n',
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _templateObject1() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  display: flex;\n  justify-content: center;\n",
  ]);
  _templateObject1 = function _templateObject1() {
    return data;
  };
  return data;
}
var $93a596b5543800a5$export$e6dfd72ab29f8598 = $parcel$interopDefault(
  $i8qgn$styledcomponents
).div(_templateObject());
var $93a596b5543800a5$export$42a852a2b6b56249 = $parcel$interopDefault(
  $i8qgn$styledcomponents
).section(_templateObject1());

var $2e324a59e876c777$export$215309ed41a7fa73 = function (col, amt) {
  var usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

function _templateObject() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  width: 350px;\n  height: 12.5rem;\n  background-color: ",
    ";\n  border: 1px solid\n    ",
    ";\n  border-radius: 5px;\n  box-shadow: 3px 3px ",
    ";\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-evenly;\n  margin: 1rem;\n\n  &:last-of-type {\n    margin-right: auto;\n  }\n\n  @media (max-width: 1024px) {\n    margin: 1rem auto;\n  }\n",
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _templateObject1() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  padding: 0 1rem;\n",
  ]);
  _templateObject1 = function _templateObject1() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  padding: 0 1rem;\n  display: flex;\n  justify-content: ",
    ";\n",
  ]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
var $255af4c3e8fb3c72$var$RepoWrapper = $parcel$interopDefault(
  $i8qgn$styledcomponents
).div(
  _templateObject(),
  function (properties) {
    return properties.backgroundColor || "#1d2433";
  },
  function (properties) {
    return properties.backgroundColor
      ? $2e324a59e876c777$export$215309ed41a7fa73(
          properties.backgroundColor,
          20
        )
      : $2e324a59e876c777$export$215309ed41a7fa73("#1d2433", 20);
  },
  function (properties) {
    return properties.boxShadowColor || "#a2aabc";
  }
);
var $255af4c3e8fb3c72$var$TitlesWrapper = $parcel$interopDefault(
  $i8qgn$styledcomponents
).div(_templateObject1());
var $255af4c3e8fb3c72$var$ButtonsWrapper = $parcel$interopDefault(
  $i8qgn$styledcomponents
).div(_templateObject2(), function (properties) {
  return properties.homepage ? "space-between" : "flex-start";
});
var $255af4c3e8fb3c72$var$RepoCardContainer = {
  RepoWrapper: $255af4c3e8fb3c72$var$RepoWrapper,
  TitlesWrapper: $255af4c3e8fb3c72$var$TitlesWrapper,
  ButtonsWrapper: $255af4c3e8fb3c72$var$ButtonsWrapper,
};
var $255af4c3e8fb3c72$export$2e2bcd8739ae039 =
  $255af4c3e8fb3c72$var$RepoCardContainer;

function _templateObject() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: ",
    ";\n  display: flex;\n  align-items: center;\n  padding-bottom: 0.625rem;\n\n  img {\n    margin-right: 10px;\n  }\n",
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _templateObject1() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 0.625rem 0;\n  color: ",
    ";\n  line-height: 1.125rem;\n",
  ]);
  _templateObject1 = function _templateObject1() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  font-size: 1rem;\n  font-weight: 600;\n  color: ",
    ";\n",
  ]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
var $c5bc889b0cd2a763$var$H1 = $parcel$interopDefault(
  $i8qgn$styledcomponents
).h1(_templateObject(), function (properties) {
  return properties.titleColor || "#e5e5e5";
});
var $c5bc889b0cd2a763$var$H2 = $parcel$interopDefault(
  $i8qgn$styledcomponents
).h2(_templateObject1(), function (properties) {
  return properties.descriptionColor || "#d7dce2";
});
var $c5bc889b0cd2a763$var$H3 = $parcel$interopDefault(
  $i8qgn$styledcomponents
).h3(_templateObject2(), function (properties) {
  return properties.languageColor || "#a2aabc";
});
var $c5bc889b0cd2a763$var$description = function (text) {
  return text && text.length > 55
    ? "".concat(text.slice(0, 55).trim(), "...")
    : "".concat(text);
};
var $c5bc889b0cd2a763$var$Titles = {
  H1: $c5bc889b0cd2a763$var$H1,
  H2: $c5bc889b0cd2a763$var$H2,
  H3: $c5bc889b0cd2a763$var$H3,
  description: $c5bc889b0cd2a763$var$description,
};
var $c5bc889b0cd2a763$export$2e2bcd8739ae039 = $c5bc889b0cd2a763$var$Titles;

function _templateObject() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\n  width: 8.75rem;\n  height: 2.5rem;\n  background-color: #2f3b54;\n  border: 1px solid #1d2433;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n  color: ",
    ';\n  font-family: "Fira Code", monospace;\n  font-weight: 600;\n\n  &:hover {\n    background-color: ',
    ";\n    color: #2f3b54;\n  }\n",
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var $de9500d05ffa7b7d$var$RepoCardButton = $parcel$interopDefault(
  $i8qgn$styledcomponents
).button(
  _templateObject(),
  function (properties) {
    return properties.bgColor || "#a2aabc";
  },
  function (properties) {
    return properties.bgColor || "#a2aabc";
  }
);
var $de9500d05ffa7b7d$export$2e2bcd8739ae039 =
  $de9500d05ffa7b7d$var$RepoCardButton;

var $e55be7e69ed60a63$exports = {};
$e55be7e69ed60a63$exports = new URL(
  "folder.ae8480da.png",
  "file:" + __filename
).toString();

function $bcff67a8011f42bf$export$2e2bcd8739ae039() {
  var ref = $i8qgn$swchelpers.slicedToArray(
      $parcel$interopDefault($i8qgn$react).useState([]),
      2
    ),
    repos = ref[0],
    setRepos = ref[1];
  var options = $parcel$interopDefault($i8qgn$react).useContext(
    $5207aa118e2b1623$export$c019608e5b5bb4cb
  );
  var username = options.username,
    titleColor = options.titleColor,
    descriptionColor = options.descriptionColor,
    backgroundColor = options.backgroundColor,
    languagesColors = options.languagesColors;
  var GITHUB_API_URL = "https://api.github.com/users/".concat(
    username,
    "/repos"
  );
  // const getRepos = async () => {
  //   await fetch(GITHUB_API_URL)
  //     .then(async (response) => (await response.json()) as Repo[])
  //     .then((data) => setRepos(data))
  //     .catch((error) => console.error(error));
  // };
  $i8qgn$usehooksts.useEffectOnce(function () {
    (function () {
      var _getRepos = $i8qgn$swchelpers.asyncToGenerator(
        $parcel$interopDefault($i8qgn$regeneratorruntime).mark(
          function _callee1() {
            return $parcel$interopDefault($i8qgn$regeneratorruntime).wrap(
              function _callee$(_ctx1) {
                while (1)
                  switch ((_ctx1.prev = _ctx1.next)) {
                    case 0:
                      _ctx1.next = 2;
                      return fetch(GITHUB_API_URL)
                        .then(
                          (function () {
                            var _ref = $i8qgn$swchelpers.asyncToGenerator(
                              $parcel$interopDefault(
                                $i8qgn$regeneratorruntime
                              ).mark(function _callee(response) {
                                return $parcel$interopDefault(
                                  $i8qgn$regeneratorruntime
                                ).wrap(function _callee$(_ctx) {
                                  while (1)
                                    switch ((_ctx.prev = _ctx.next)) {
                                      case 0:
                                        _ctx.next = 2;
                                        return response.json();
                                      case 2:
                                        return _ctx.abrupt("return", _ctx.sent);
                                      case 3:
                                      case "end":
                                        return _ctx.stop();
                                    }
                                }, _callee);
                              })
                            );
                            return function (response) {
                              return _ref.apply(this, arguments);
                            };
                          })()
                        )
                        .then(function (data) {
                          return setRepos(data);
                        });
                    case 2:
                    case "end":
                      return _ctx1.stop();
                  }
              },
              _callee1
            );
          }
        )
      );
      function getRepos() {
        return _getRepos.apply(this, arguments);
      }
      return getRepos;
    })()();
  });
  var handleOnClick = function (url) {
    return function (_event) {
      return window.open(url, "_blank");
    };
  };
  var getLangColor = function (lang) {
    return languagesColors && languagesColors[lang];
  };
  var renderRepos =
    repos === null || repos === void 0
      ? void 0
      : repos.map(function (param) {
          var id = param.id,
            name = param.name,
            description = param.description,
            language = param.language,
            homepage = param.homepage,
            html_url = param.html_url;
          var color = getLangColor(language);
          return /*#__PURE__*/ $i8qgn$reactjsxruntime.jsxs(
            $255af4c3e8fb3c72$export$2e2bcd8739ae039.RepoWrapper,
            {
              backgroundColor: backgroundColor,
              boxShadowColor: color,
              children: [
                /*#__PURE__*/ $i8qgn$reactjsxruntime.jsxs(
                  $255af4c3e8fb3c72$export$2e2bcd8739ae039.TitlesWrapper,
                  {
                    children: [
                      /*#__PURE__*/ $i8qgn$reactjsxruntime.jsxs(
                        $c5bc889b0cd2a763$export$2e2bcd8739ae039.H1,
                        {
                          titleColor: titleColor,
                          children: [
                            /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx("img", {
                              src: /*@__PURE__*/ $parcel$interopDefault(
                                $e55be7e69ed60a63$exports
                              ),
                              alt: "folder",
                              width: "38px",
                              height: "36px",
                            }),
                            name,
                          ],
                        }
                      ),
                      /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
                        $c5bc889b0cd2a763$export$2e2bcd8739ae039.H2,
                        {
                          descriptionColor: descriptionColor,
                          children:
                            $c5bc889b0cd2a763$export$2e2bcd8739ae039.description(
                              description
                            ),
                        }
                      ),
                      /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
                        $c5bc889b0cd2a763$export$2e2bcd8739ae039.H3,
                        {
                          languageColor: color,
                          children: language,
                        }
                      ),
                    ],
                  }
                ),
                /*#__PURE__*/ $i8qgn$reactjsxruntime.jsxs(
                  $255af4c3e8fb3c72$export$2e2bcd8739ae039.ButtonsWrapper,
                  {
                    homepage: !!homepage,
                    children: [
                      homepage &&
                        /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
                          $de9500d05ffa7b7d$export$2e2bcd8739ae039,
                          {
                            onClick: handleOnClick(homepage),
                            bgColor: color,
                            children: "Live demo",
                          }
                        ),
                      /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
                        $de9500d05ffa7b7d$export$2e2bcd8739ae039,
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
        });
  return /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
    $i8qgn$reactjsxruntime.Fragment,
    {
      children: renderRepos,
    }
  );
}

function _templateObject() {
  var data = $i8qgn$swchelpers.taggedTemplateLiteral([
    "\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n	display: block;\n}\nbody {\n	line-height: 1;\n}\nol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}\n",
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
// ? CSS RESET
var $5207aa118e2b1623$var$GlobalStyles =
  $i8qgn$styledcomponents.createGlobalStyle(_templateObject());
var $5207aa118e2b1623$var$componentOptions = {
  username: "",
  titleColor: "",
  descriptionColor: "",
  backgroundColor: "",
  languagesColors: {},
};
var $5207aa118e2b1623$export$c019608e5b5bb4cb =
  /*#__PURE__*/ $parcel$interopDefault($i8qgn$react).createContext(
    $5207aa118e2b1623$var$componentOptions
  );
function $5207aa118e2b1623$export$2e2bcd8739ae039(param) {
  var username = param.username,
    titleColor = param.titleColor,
    descriptionColor = param.descriptionColor,
    backgroundColor = param.backgroundColor,
    languagesColors = param.languagesColors;
  var userOptions = $parcel$interopDefault($i8qgn$react).useMemo(function () {
    return {
      username: username,
      titleColor: titleColor,
      descriptionColor: descriptionColor,
      backgroundColor: backgroundColor,
      languagesColors: languagesColors,
    };
  }, []);
  return /*#__PURE__*/ $i8qgn$reactjsxruntime.jsxs(
    $5207aa118e2b1623$export$c019608e5b5bb4cb.Provider,
    {
      value: userOptions,
      children: [
        /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
          $93a596b5543800a5$export$42a852a2b6b56249,
          {
            children: /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
              $93a596b5543800a5$export$e6dfd72ab29f8598,
              {
                children: /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
                  $bcff67a8011f42bf$export$2e2bcd8739ae039,
                  {}
                ),
              }
            ),
          }
        ),
        /*#__PURE__*/ $i8qgn$reactjsxruntime.jsx(
          $5207aa118e2b1623$var$GlobalStyles,
          {}
        ),
      ],
    }
  );
}
$5207aa118e2b1623$export$2e2bcd8739ae039.defaultProps = {
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

//# sourceMappingURL=main.cjs.map
