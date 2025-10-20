// src/data/resume.ts

export const profile = {
  name: "José Kupeka Muhlanga",
  title: "Software Engineer - Full Stack & DevOps",
  location: "Nairobi, Kenya",
  email: "muhlangakupeka@outlook.com",
  phone: "+254113771641",
  linkedin: "https://www.linkedin.com/in/josekmuhlanga",
  github: "https://www.github.com/JMuhlanga",
  summary: `Full Stack Software Engineer with 3+ years of experience designing scalable backend systems (Java, PHP, Go) and modern frontend applications (React, Next.js). Skilled in building secure APIs, deploying containerized microservices, and automating cloud infrastructure. Proven ability to deliver high-impact software across health, finance, and government sectors.`,
  summaryPlus:`Passionate Full Stack Software Engineer with extensive experience throughout the Software Development Life Cycle. Proficient in multiple programming languages, frameworks, and architectural designs, I currently specialise in developing ERP and HMIS solutions to optimise data management and operational efficiency. I stay current with industry trends and best practices, integrating emerging technologies like AI and cloud computing to drive innovation. I have a strong background in developing applications that deliver seamless user experiences across different platforms and devices. A collaborative team player, I excel in communication, strategic problem-solving and provide adept IT support, user training, and secure server administration for optimal performance. `
};

export const skills = [
  "Java", "PHP", "JavaScript", "Go", "Kotlin", "C#", "Dart", "Python", "Ruby", "Bash",
  "Spring Boot", "Laravel", "Node.js", "React", "Next.js", "Express", "Flutter", "Tailwind CSS",
  "Docker", "Kubernetes", "Jenkins", "GCP", "Azure", "Git", "Linux",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "Kafka", "RabbitMQ"
];

export const experience = [
  {
    company: "Christian Health Association of Kenya (CHAK)",
    title: "Software Engineer",
    date: "Sep 2023 – Present",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Maintain and extend core HMIS modules using Laravel, JavaScript, and Node.js, improving modularity and data accuracy.",
      "Design and build microservices in Java and Go for reporting, authentication, and data synchronization across health systems.",
      "Train healthcare workers across multiple counties, boosting user adoption and confidence in digital tools.",
      "Balance monolithic and microservice architecture under bandwidth constraints, optimizing system performance in low-resource environments.",
      "Contribute to agile sprint planning and regular feature releases as part of a cross-functional development team."
    ]
  },
  {
    company: "Africa Road Maintenance Fund (ARMFA)",
    title: "Software Engineer (Consultant)",
    date: "Nov 2024 – Sep 2025",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Developed the organization’s website using Next.js and integrated a CMS blog to enhance stakeholder communication.",
      "Conducted an IT infrastructure audit and assisted in deploying updated devices, improving operational reliability.",
      "Set up Microsoft 365 accounts, migrate domain emails, and support onboarding across departments.",
      "Built and deployed a Spring Boot-based learning management system (LMS) on AWS, streamlining internal training.",
      "Ensured infrastructure compliance with regional NGO IT standards and security practices."
    ]
  },
  {

    company: "Africom Media LTD",
    title: "Software Engineer",
    date: "Jan 2023 – Jul 2023",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Developed secure peer-to-peer transaction APIs using Java and Spring Boot, enhancing platform security and scalability.",
      "Collaborated with frontend teams using React and React Native to build seamless web and mobile interfaces.",
      "Improved integration and testing pipelines through the use of shared API schemas and mock services.",
      "Participated in end-to-end product delivery cycles, from design to deployment."
    ]
  },
    {

    company: "Alliance Française de Nairobi",
    title: "Software Engineer",
    date: "Sep 2021 – Feb 2022",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Provided technical support and troubleshooting for staff devices and office infrastructure, ensuring system uptime.",
      "Designed and deployed digital student feedback surveys using Google Forms and Sheets.",
      "Analyzed survey data to extract insights that helped refine course offerings and improve learner satisfaction."
    ]
  },
    {

    company: "Christian Health Association of Kenya (CHAK)",
    title: "Software Engineer",
    date: "Sep 2023 – Present",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Enhanced core HMIS modules using Laravel, JavaScript, and Node.js, improving data accuracy and modularity.",
      "Designed and deployed microservices in Java and Go for reporting, authentication, and cross-county data synchronization.",
      "Trained healthcare workers across multiple counties, increasing adoption of digital tools.",
      "Optimized monolithic and microservice architecture under bandwidth constraints.",
      "Contributed to agile sprint planning and regular feature releases."
    ]
  }
];

export const education = [
  {
    institution: "Africa Nazarene University",
    qualification: "Bachelor of Science in Computer Science",
    date: "2017 – 2022",
    location: "Nairobi, Kenya"
  },
  {
    institution: "Sacho High School",
    qualification: "Kenya Certificate of Secondary Education (KCSE)",
    date: "2011 – 2014",
    location: "Baringo, Kenya"
  }
];

export const certificationsAwards = [
  {
    name: "DevOps CI/CD & Engineering",
    issuer: "Moringa School",
    date: "Issued 2024"
  },
  {
    name: "Software Engineering ",
    issuer: "Moringa School",
    date: "Issued 2023"
  },
  {
    name: "Java & OOP",
    issuer: "Vanderbilt University on Coursera",
    date: "Issued 2022"
  },
  {
    name: "CCNA1: Introduction to Networks",
    issuer: "Cisco via Africa Nazarene University",
    date: "Issued 2019"}

];

export const projects = [
  {
    name: "Mpesa Integration – CHAK HMIS",
    description: "Developed a secure mobile payment module enabling real-time M-Pesa transactions for patient billing, integrated with hospital workflows.",
    stack: ["Node.js", "Go", "PHP", "Safaricom Daraja API"]
  },
  {
    name:"AfyaLink (SHA) Gateway – CHAK HMIS",
    description: "Built a microservice for synchronizing patient data across county health systems, improving data consistency and accessibility.",
    stack: ["Node", "PHP", "SQL", "Redis","SHA API"]
  },
  {
    name: "Financial Transaction Gateway – Africom Media LTD",
    description: "Built a secure full-stack transaction system supporting peer-to-peer transfers, user authentication, and transaction reporting.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Thymeleaf"]
  }
];
