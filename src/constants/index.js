import { iu, sportion, qiibee } from "../assets/images"
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  emotionjs,
  rxjs,
  job,
  dashboard,
  exchange
} from "../assets/icons"

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: emotionjs,
    name: "Emotion",
    type: "Frontend",
  },
  {
    imageUrl: rxjs,
    name: "RxJS",
    type: "Frontend",
  }
]

export const experiences = [
  {
    title: "Frontend developer",
    company_name: "IU Networks LLC",
    icon: iu,
    iconBg: "#accbe1",
    date: "Jan 2020 - April 2021",
    points: [
      "Contributed to the design and implementation of highly responsive user interface components using React.js.",
      "Created interactive UIs on React.js/React Native using React hooks and modern ES6 Javascript coding principles",
      "Built the layout with HTML, CSS on React.js projects considering cross-browser compatibility issues"
    ],
  },
  {
    title: "UI/UX Engineer",
    company_name: "Sportion",
    icon: sportion,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Created dynamic user interfaces using CSS, HTML, and React.js.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Product Manager",
    company_name: "qiibee",
    icon: qiibee,
    iconBg: "#b7e4c7",
    date: "Mar 2023 - Aug 2023",
    points: [
      "Collaborated with cross-functional teams to plan, execute and optimize product features",
      "Monitored the entire lifecycle of the product, from inception to launch.",
      "Coordinated with development team for product enhancements, bug fixes and interface improvements."
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "qiibee",
    icon: qiibee,
    iconBg: "#a2d2ff",
    date: "Jul 2021 - Aug 2023",
    points: [
      "Worked on 2 main products - Loyalty Whitelabel App and Loyalty Admin Dashboard.",
      "Used best practices with React.js, Rx.js, Redux, MUI and Emotion.js.",
      "Built new reusable components, customized apps for every client.",
      "Collaborated closely with BE developers to seamlessly integrate new features, resulting in a 20% reduction in app crash instances and improved user satisfaction ratings by 15%.",
      "Participated in code reviews and providing constructive feedback to other developers.",
      "Utilized Git for managing and tracking changes in source code during software development."
    ],
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/alwi_har',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/alwina-harutyunyan',
  }
]

export const projects = [
  {
    iconUrl: dashboard,
    theme: 'btn-back-pink',
    name: 'Loyalty Admin Dashboard',
    description: 'Worked on a comprehensive B2B dashboard that enables users to monitor their analytics, connect with brands for exchanges, and seamlessly create NFTs and rewards, streamlining business operations and engagement in one intuitive platform.',
    link: 'https://dashboard.qiibee.com/',
  },
  {
    iconUrl: exchange,
    theme: 'btn-back-blue',
    name: 'Loyalty Whitelabel App',
    description: 'Worked on a B2C mobile web app that empowers users to trade their loyalty points, earn rewards, and purchase NFTs, enhancing the user experience through seamless transactions and exclusive opportunities.',
    link: 'https://rewards.qiibee.com/',
  },
  {
    iconUrl: job,
    theme: 'btn-back-green',
    name: 'Job Search App',
    description: 'Developed a mobile application that showcases popular and nearby job listings, allowing users to quickly discover opportunities that match their interests.',
    link: 'https://github.com/alwihar/JobSearch',
  }
]