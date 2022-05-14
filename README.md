# gh-repos-showcase

## Goal

The goal is to migrate repositories section of my
[personal website](https://devastion.net/) into npm package. Also practice some
styled components and react component packaging.

## Usage

```git
npm i gh-repos-showcase
import GHReposShowcase from "gh-repos-showcase"
<GHReposShowcase username="your_gh_profile" />
```

## Options

```git
titleColor - changes the color of the h1
descriptionColor - changes the color of the h2
backgroundColor - changes the box background color
languagesColors - accepts object (example:
const colors = {
    TypeScript: "#5ccfe6",
    JavaScript: "#ef6b73",
    PHP: "#c3a6ff",
    Vue: "#41b380",
    HTML: "#eab676",
    Python: "#ef4528",
    Java: "#edd157"
    })
folder - accepts url for the folder icon
example: <GHReposShowcase username="devastion" titleColor="#3c4043" descriptionColor="red" backgroundColor="yellow" languagesColors={colors} folder="myUrl" />
```

## Demo

\*This is the default look

![Demo](https://raw.githubusercontent.com/devastion/gh-repos-showcase/main/demo.png)

## To be continued 🚀

## 🛠 TO DO

- Option for layout rows and cols
