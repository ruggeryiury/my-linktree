# My Linktree <img  src='https://xesque.rocketseat.dev/platform/tech/html5.svg' width='24px'  title='HTML5'/>  <img  src='https://camo.githubusercontent.com/3a61a49321fba37513904864aee93be1873b05f2cb84b9c13a5dfbb534ac17fa/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f736173732e737667'  width='24px' title='SCSS (Sass)'/> <img  src='https://xesque.rocketseat.dev/platform/tech/tailwind.svg'  width='24px' title='Tailwind CSS'/> <img  src='https://xesque.rocketseat.dev/platform/tech/javascript.svg'  width='24px' title='JavaScript'/>  <img  src='https://xesque.rocketseat.dev/platform/tech/typescript.svg'  width='24px' title='TypeScript'/>  <img  src='https://xesque.rocketseat.dev/platform/tech/reactjs.svg'  width='24px' title='React'/>

<div>
<img src='https://img.shields.io/github/last-commit/ruggeryiury/my-linktree?color=%23DDD&style=for-the-badge' />
<img src='https://img.shields.io/github/repo-size/ruggeryiury/my-linktree?style=for-the-badge' />
<img src='https://img.shields.io/github/issues/ruggeryiury/my-linktree?style=for-the-badge' />
<img src='https://img.shields.io/github/package-json/v/ruggeryiury/my-linktree?style=for-the-badge' />
<img src='https://img.shields.io/github/license/ruggeryiury/my-linktree?style=for-the-badge' />
</div>

Linktree houses all the important links that you want to share with your audience, as a social-linking service. This Linktree was created from scratch using **React + TypeScript**.

# 💠 Table of Contents
- [Features](#-features)
- [Technologies](#%EF%B8%8F-technologies)
- [Changelog](https://github.com/ruggeryiury/my-linktree/blob/master/CHANGELOG.md)

## 🚀 Features
- **Fully Responsive:** This web app was created under the *mobile-first*  concept. Responsive web design is a web design method that enables web to fit the screens of different devices automatically, displaying the content in a way that people feel comfortable. This greatly reduces users’ operations like panning, zooming and scrolling when browsing the web. *Mobile first*, as the name suggests, means that I started the product design from the mobile end which has more restrictions, then expand its features to create a tablet or desktop version.

- **Works as a Progressive Web App:** Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps. PWAs provide a number of advantages to users — including being installable, progressively enhanced, responsively designed, re-engageable, linkable, discoverable, network independent, and secure.

- **Multi-language support**: This web app has multi-language support, based on the client's navigator language. Basically, all text strings are functions that return strings based on key codes given as parameters on these funcions, that reads from locale files based on the client's navigator language. The language can be changed into the web app settings, located on the header that appears when you scroll down the page.

## ⚙️ Technologies
- [React App](https://create-react-app.dev/), using [TypeScript](https://www.typescriptlang.org/) + PWA template.
	- [CRA template information](https://www.npmjs.com/package/cra-template-pwa-typescript)
	- *Start with NPM:* `npx create-react-app . --template pwa-typescript`
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
	-  *Install with NPM:*  `npm i -D tailwindcss`
- [React Router DOM](https://www.npmjs.com/package/react-router-dom): Declarative routing for React web applications.
	-  *Install with NPM:*  `npm i react-router-dom`
- [React Icons](https://www.npmjs.com/package/react-icons): Include popular icons in your React projects easly with react-icons.
	-  *Install with NPM:*  `npm i react-icons`
- [Sass](https://www.npmjs.com/package/sass): A pure JavaScript implementation of Sass.
	-  *Install with NPM:*  `npm i sass`
- [Github Pages](https://www.npmjs.com/package/gh-pages): Publish to a gh-pages branch on GitHub (or any other branch on any other remote).
	-  *Install with NPM:*  `npm i -D gh-pages`
- [UGC 2 JSON Converter](https://github.com/ruggeryiury/ugc2json_converter): A self-made Python script to generate JSON files without needing to use explicit JSON structure. It's used on this web app to create locale files, as part of the *Multi-language support* feature.