import self from "./img/self.png";
import mock1 from "./img/mock1.png";
import {
  faDev,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(20, 238, 192)", "rgb(135, 229, 99)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sudhanshu ",
  lastName: "Makwana",
  initials: "sm", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🤖",
      text: "generative AI enthusiast",
    },
    {
      emoji: "🌎",
      text: "based in Bengaluru",
    },
    {
      emoji: "📧",
      text: "sudhanshumakwana@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://dev.to/sudhz_",
      icon: faDev,
      label: "blog",
    },
    {
      link: "https://leetcode.com/u/sudhz/",
      icon: faCode,
      label: "leetcode",
    },
    {
      link: "https://github.com/sudhz",
      icon: faGithub,
      label: "github",
    },
    {
      link: "https://linkedin.com/in/sudhz",
      icon: faLinkedin,
      label: "linkedin",
    },
    {
      link: "https://twitter.com/sudhz_",
      icon: faTwitter,
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hey, I'm Sudhanshu, a Software Developer at Dayforce with a Computer Science degree from SRMIST. I'm passionate about making tech work for people, not the other way around. Whether I'm coding, collaborating with my team, or tackling complex problems, I'm always looking for ways to simplify and innovate. My journey in tech has taught me that understanding people is just as important as understanding code. I thrive on teamwork, love learning new things, and am committed to creating user-friendly solutions that make a real difference.",
  skills: {
    proficientWith: [
      "python",
      "java",
      "typescript",
      "reactjs",
      "nodejs",
      "git",
      "sql",
      "tailwindcss",
    ],
    exposedTo: ["kotlin", ".net", "c#", "aws", "docker", "linux"],
  },
  experiences: [
    {
      role: "Software Developer",
      company: "Dayforce",
      achievements: [
        "Completed comprehensive technical training in Java, .NET, TypeScript, React.js, Angular, PL/SQL, and Oracle SQL DB, building a strong foundation in modern web and software development",
        "Led a team of 10 developers in a capstone project, developing a full-stack course management system using ReactJS/MUI, .NET Core, and Microsoft SQL Server, featuring course browsing, purchasing, and content administration",
        "Implemented an in-house one-click CAPTCHA solution for the Employee Self-Service (ESS) India product, utilizing Java for backend logic and Rust compiled to WebAssembly for frontend performance",
        "Collaborated to identify and remediate 160 SQL injection vulnerabilities in the ESS Java codebase, and developed a release note upload/download project for the Operations Excellence team",
      ],
    },
    {
      role: "Remote Data Engineer",
      company: "Freelance Project via Upwork",
      achievements: [
        "Engineered a high-performance Python/Scrapy web scraping script to efficiently extract product data from bjs.com and samsclub.com for an American client, leveraging REST APIs and bypassing JavaScript rendering. Implemented concurrent requests, enhancing data extraction speed by 300% compared to traditional sequential methods",
        "Implemented custom CSV/JSON export functionality and integrated with Shopify's API to enable real-time product data uploads to client's e-commerce store during web scraping operations, streamlining product catalog management",
      ],
    },
    {
      role: "Remote Software Developer",
      company: "Yanolja Co. Ltd.",
      achievements: [
        "Refined a React.js GUI tool by devising and implementing a node naming feature using BFS and cycle detection in React Flow, enhancing the graph's functionality by allowing node names to be auto-suggested from a list of ancestor nodes",
        "Accelerated feature delivery by collaborating in an agile team, contributing to a 15% improvement in project timelines",
      ],
    },
    {
      role: "Research Intern",
      company: "Samsung R&D Institute",
      achievements: [
        "Led a team of 4 students in converting the GSM Test Automation Framework from Tool Command Language (Tcl) to Python, enhancing readability and modernizing the framework",
        "Refactored and improved several test scripts and core framework components which cut down the codebase size by 25%",
      ],
    },
  ],
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "gym",
      emoji: "💪🏻",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "traveling",
      emoji: "🚗",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "CodeLingo",
      live: "https://codelingo.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/sudhz/CodeLingo", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
  ],
};
