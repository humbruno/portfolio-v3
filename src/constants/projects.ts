import { type Project } from "~/types";

const projects: Project[] = [
  {
    title: "SafeBrok Europe",
    excerpt:
      "Landing page for a peer-to-peer investment service. Contains a blog section powered by a CMS (Contentful) using both REST and GraphQL APIs. This was the first professional project where I took the lead in designing the project architecture, including the data models that would be served by the CMS. Additionally, it was also my responsibility to create the automated pipeline to build and deploy the project to AWS.",
    demoUrl: "https://www.safebrokeurope.com/",
    tags: [
      "react",
      "gatsby.js",
      "styled-components",
      "typescript",
      "contentful",
      "rest",
      "graphql",
      "aws",
      "i18n",
      "lokalise",
    ],
  },
  {
    title: "Iban Wallet",
    excerpt:
      "Investment platform web application. My role in this high-traffic platform included adding new features (investment flows & user authentication), as well as rewriting legacy code and implementing Unit Tests utilizing Jest, and E2E tests with Cypress.\nAlongside this platform, I participated in the development of a backoffice portal to manage the users, which was heavily integrated with the database developed by our backend team. Through my work on both projects, I gained experience consuming APIs to display and edit data.",
    demoUrl: "https://www.ibanwallet.com/",
    tags: [
      "react",
      "next.js",
      "typescript",
      "rest",
      "docker",
      "aws-elasticbeanstalk",
      "internationalization",
      "jest",
      "cypress",
      "firebase",
      "redux",
    ],
  },
  {
    title: "Neowintech",
    excerpt:
      "Landing page for a marketplace of investment products, built with Gatsby. Albeit a simple landing page, it was incredibly helpful in my growth as a developer, as it introduced me to core concepts such as dynamically translation of pages as well as providing a graphical visualization of data in the form of charts using the D3 library.",
    demoUrl: "https://www.neowintech.com/en/",
    tags: [
      "react",
      "gatsby.js",
      "tailwindcss",
      "typescript",
      "react-intl",
      "d3",
    ],
  },
  {
    title: "Sunday Marketplace",
    excerpt:
      "Static landing page for a secondary product created by the company, in order to promote traffic to the main investment platform (Iban Wallet). This project first introduced me to core concepts in unit testing, as well as the opportunity to customize the existing deployment pipeline so that the newly-created tests would be run automatically on each deployment, thus allowing the team to catch any potential bugs before they can impact the end users.",
    demoUrl: "https://sundaymarketplace.eu/en/",
    tags: ["react", "gatsby.js", "jest", "typescript", "github-actions"],
  },
  {
    title: "Notes",
    excerpt:
      "Notes.me is my first full-stack project that uses Firebase to store data, where the user can sign-in using a Google Account or anonymously and easily add, delete and update note cards.",
    demoUrl: "https://notes.brunosantos.dev/",
    srcUrl: "https://github.com/humbruno/notes",
    tags: [
      "react",
      "next.js",
      "typescript",
      "styled-components",
      "firebase-auth",
      "firebase-database",
      "react-toastify",
    ],
    personal: true,
  },
  {
    title: "Devfinder",
    excerpt:
      "Devfinder is a singe-page application build with ReactJS and Axios. It works as a search engine for profiles on GitHub, where the data is fetched directly from GitHub's public API with the use of the Axios library. The page also offers a light/dark theme toggle, built with SCSS and React's Context API.",
    demoUrl: "https://devfinder.brunosantos.dev/",
    srcUrl: "https://github.com/humbruno/devfinder",
    tags: ["react", "vite", "scss", "axios"],
    personal: true,
  },
  {
    title: "Multi step form",
    excerpt:
      "This is a single-page, multi-step form where you can customize your subscription plan. Once the data is filled for each step, it is stored in a global state and that means you can go back and forth between each step and change it accordingly!",
    demoUrl: "https://form.brunosantos.dev/",
    srcUrl: "https://github.com/humbruno/multi-step-form",
    tags: ["react", "vite", "typescript", "scss", "redux-toolkit"],
    personal: true,
  },
  {
    title: "Dictionary",
    excerpt:
      "Web dictionary app where you can search for a word to view its' definitions, as well as learn the correct pronounciation with the help of an audio file.",
    demoUrl: "https://dictionary.brunosantos.dev/",
    srcUrl: "https://github.com/humbruno/dictionary",
    tags: ["react", "vite", "typescript", "dictionary-api"],
    personal: true,
  },
  {
    title: "Splitter",
    excerpt:
      "Simple web calculator designed to divide a bill between a desired number of people, as well as calculate the tip percentage and split it evenly.",
    demoUrl: "https://humbruno.github.io/tip-calculator/",
    srcUrl: "https://github.com/humbruno/tip-calculator",
    tags: ["javascript", "scss", "gulp"],
    personal: true,
  },
  {
    title: "Insure",
    excerpt:
      "Landing page for a fictitious company - Insure. It was one of my very first projects and as such, I hold it dearly on my heart and I've decided to add it here as a reminder of how far I've come as a developer. This page was my first implementation of a native navigation bar that collapses when the page is viewed on a smaller screen.",
    demoUrl: "https://humbruno.github.io/insure-landing/",
    srcUrl: "https://github.com/humbruno/insure-landing",
    tags: ["javascript", "html", "css"],
    personal: true,
  },
];

export default projects;
