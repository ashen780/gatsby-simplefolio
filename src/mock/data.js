import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'ashen portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Ashen Madhusanka',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'asen2.jpg',
  paragraphOne:
    "For the past 2+  years I've been spending time  full stack web development at DIMO - Diesel & Motor Engineering PLC. Once I finished my HNDIT academics at SLIATE I've joined DIMO as an intern. After my internship I've been working as a junior software developer.",
  paragraphTwo:
    "While I'm working I got and opportunity to work on its projects, E-commerce project and a few other web based projects.",
  paragraphThree:
    'During my job experience, I had practical skills with interesting technologies and tasks. On the whole role of my engineering practice include building and supporting web and mobile solutions based on cloud platforms (AWS, GCP), experience in software development, testing and securing Server setup and application.',
  resume: 'https://drive.google.com/file/d/1wCqk8FJdxiZQpmjaIsZihfVJtrEasD5l/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA PERSONAL
export const projectsDataPersonal = [
  {
    id: nanoid(),
    img: 'social_media_app.png',
    title: ' Social Media App',
    info: 'This is a basic app like a social media platform where users can register and post (chat and play game in the soon).',
    info2:
      'Frontend is a react app hosted in firebase backend is in horeku live version and source code available below.Referred tutorials are on github',
    url: 'https://post.ashen780.tk/',
    repo: 'https://github.com/ashen780/post_social_media', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snakegame1.png',
    title: 'Multiplayer Snake Game',
    info: 'Simple multiplayer snake game. this game is build using javascipt html canvas and css.    game is hosted in firebase backend is in horeku live version and source code available below.',
    info2: '',
    url: 'https://game.ashen780.tk/',
    repo: 'https://github.com/ashen780/snake-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherapp1.jpg',
    title: 'React Native weather app',
    info: 'This is a simple react native android app showing current weather based on user GPS location',
    info2: "I've used Expo to build this app and got weather data from openweathermap.org.",
    url: 'https://drive.google.com/file/d/1mFlCWT41mHytxPEitHZGKf6-_JwRpqjo/view?usp=sharing',
    repo: 'https://github.com/ashen780/weather-app/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chat1.png',
    title: 'chat web application | socket.io',
    info: 'This is a basic chat web application where anyone can connect to the chat using the chat room name.',
    info2:
      "I've to use socket.io to build this app, the frontend is react hosted in firebase. Backend is node js hosted in Heroku",
    url: 'https://chat.ashen780.tk/',
    repo: 'https://github.com/ashen780/chat_application', // if no repo, the button will not show up
  },
];

// PROJECTS DATA WORK
export const projectsDataWork = [
  {
    id: nanoid(),
    img: 'dimoretail.png',
    title: ' E-commerce www.dimoretail.lk',
    info: 'DIMO Retail is a premier online market place.',
    info2:
      "The website is using woo WooCommerce core and we've to use WooCommerce REST API for report generation  and analytics data requirements",
    url: 'https://dimoretail.lk/',
    //    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dats.png',
    title: 'DIMO Academy Institute website www.dimoacademy.lk',
    info: "This is a WordPress website for DIMO Academy Institute. I've set up the GCP VM hosting this site and security implementations",
    url: 'https://dimoacademy.lk/',
    //  repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'faceApp.jpg',
    title: 'Face recognition attendance system',
    info: 'This is an attendance system based on face recognition. Allowed users can register with their photos with the given portal. Android app to attendance capture in front of the office gate. This project is still research and development stage. Our main goal is to reduce hardware costs using android phones.',
    info2:
      "Technologies used for this  AWS Amplify, AWS Rekognition, DynamoDB, AWS Cognito, AWS s3, AWS lambda, react and node-js. I've designed the develop the user registration react front end and was lambada functions.",
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    images: ['face1.png', 'face2.png'],
  },
  {
    id: nanoid(),
    img: 'dfs3.png',
    title: 'DIMO group ﬁnancial summary',
    info: "DIMO has 9 clusters, in this project, I've built a vanilla js web to capture each cluster finance summary and put them together for the whole group's summary view.",
    info2:
      "Technologies used for this are all Google Firebase technologies, database => firestore, user login via google auth limited to organisation emails and 'superAdmin' allowed users. as well as GCP cloud functions.",
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    images: ['dfs1.png', 'dfs2.png', 'dfs4.png', 'dfs5.png'],
  },
  {
    id: nanoid(),
    img: 'iot2.png',
    title: 'IoT Electricity consumption monitoring system',
    info: 'Build a system to monitor the power consumption of ACs using IoT technologies and collect and analyse data to identify methods of optimizing the power consumption to reduce the cost of the monthly electric bill. Also facilitating two way communication to control power to the devices.',
    info2:
      "For this project, we've used various IoT technologies such as MQTT, NODE-RED, Thingsboard, Tasmota firmware, MongoDB",
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    images: ['iot1.png'],
  },
];
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send E-mail',
  email: 'ashenm780@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ashen780',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/ashen780/projects/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashen780',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashen780',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
