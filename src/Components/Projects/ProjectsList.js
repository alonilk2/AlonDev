import { CelluStackRow, CompoundStackRow, FiberLocatorStackRow, IMBarberStackRow, SimonSaysStackRow, TorgateStackRow } from "./TechStackRow";

export const ProjectsList = {
  Torgate: {
    name: "Torgate",
    date: "August, 2022",
    stack: "React, Spring, MySQL, MUI",
    images: [
      "https://github.com/alonilk2/map1/blob/main/torgate1.png?raw=true",
      "https://github.com/alonilk2/map1/blob/main/torgate2.png?raw=true",
      "https://github.com/alonilk2/map1/blob/main/torgate3.png?raw=true",
      "https://github.com/alonilk2/map1/blob/main/torgate4.png?raw=true",
    ],
    description: `Torgate is the most modern, flexible and sophisticated appointment scheduling system in Israel for small-medium businesses.
    Simply register, add services and providers, and get a custom scheduling landing page for your clients.`,
    stackIcons: TorgateStackRow,
    git: 'https://github.com/alonilk2/Torgate-React-18-Java-Spring-Boot-MySQL-MaterialUI',
    url: 'https://torgate.herokuapp.com/'
  },
  IMBarber: {
    name: "IM.Barber",
    date: "March, 2022",
    stack: "React, Node.js, PostgreSQL, Express.js",
    images: [
      "https://alonilk2.github.io/map1/barber1.png",
      "https://alonilk2.github.io/map1/barber2.png",
      "https://alonilk2.github.io/map1/barber3.png",
    ],
    description: `Online store and corporate website for private customer. Includes
    online store management system with orders, users and products
    management, PayPal Checkout, custom branding and SEO, all made
    originally according to customer's requirements.`,
    stackIcons: IMBarberStackRow,
    git: 'https://github.com/alonilk2/IM.Barber-React-NodeJS-Express-PostgreSQL',
    url: 'http://www.imbarber.com/'
  },
  Cellu: {
    name: "Cellu 5G",
    date: "January, 2021",
    stack: "React Native, Node.js, Google Maps API, Java",
    images: [
      "https://alonilk2.github.io/map1/1.jpg",
      "https://alonilk2.github.io/map1/2.jpg",
      "https://alonilk2.github.io/map1/3.jpg",
    ],
    description: `Cellu is an Android application which allows users to locate cellular
    antennas in Israel. Cellu displays antennas located close to you
    according to the current device's location, obtained by the device's
    GPS module. Users can also locate nearby antennas based on a specific
    address that being chosen from a list of all streets and cities in
    Israel.`,
    stackIcons: CelluStackRow,
    git: 'https://github.com/alonilk2/Cellu5G-React-Native',
    url: 'https://play.google.com/store/apps/details?id=com.cellu'
  },
  Fiberlocator: {
    name: "FiberLocator",
    date: "July, 2021",
    stack: "React, Node.js, Javascript",
    images: [
      "https://alonilk2.github.io/map1/fiber.jpg",
      "https://alonilk2.github.io/map1/fiber1.jpg",
    ],
    description: `FiberLocator is a web application allowing users to run a fiber optics
    infrustructre availability check in their area, in multiple internet
    companies in Israel simultaneously.`,
    stackIcons: FiberLocatorStackRow,
    git: 'https://github.com/alonilk2/FiberLocator',
    url: 'http://fiberlocate.herokuapp.com/',
  },
  Simonsays: {
    name: "Simon Says",
    date: "May, 2022",
    stack: "React Native, TypeScript, Redux",
    images: [
      "https://alonilk2.github.io/map1/simonsays.jpg",
      "https://alonilk2.github.io/map1/simonsays1.jpg",
    ],
    description: `Simon Says game, made using React Native, TypeScript, Redux`,
    stackIcons: SimonSaysStackRow,
    git: 'https://github.com/alonilk2/Simon-Says-Game-React-Native-TypeScript',
    url: 'https://alonilk2.github.io/map1/SimonSays.apk'
  },
  Compound: {
    name: "Compound Dapp",
    date: "January, 2022",
    stack: "React, MetaMask, Ethers.js, Hardhat",
    images: ["https://alonilk2.github.io/map1/compound.png"],
    description: `A single-page web application for Compound DeFi Protocol services,
    featuring ETH coins supply and DAI coins borrow. This app is
    interfacing with MetaMask wallets.`,
    stackIcons: CompoundStackRow,
    git: 'https://github.com/alonilk2/Compound-Protocol-Dapp',
    url: 'https://compound-dapp.herokuapp.com/'
  },
};