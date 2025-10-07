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
      "Enhanced core HMIS modules using Laravel, JavaScript, and Node.js, improving data accuracy and modularity.",
      "Designed and deployed microservices in Java and Go for reporting, authentication, and cross-county data synchronization.",
      "Trained healthcare workers across multiple counties, increasing adoption of digital tools.",
      "Optimized monolithic and microservice architecture under bandwidth constraints.",
      "Contributed to agile sprint planning and regular feature releases."
    ]
  },
  // Add other experience entries here...
];

export const projects = [
  {
    name: "Mpesa Integration – CHAK HMIS",
    description: "Developed a secure mobile payment module enabling real-time M-Pesa transactions for patient billing, integrated with hospital workflows.",
    stack: ["Node.js", "Go", "PHP", "Safaricom Daraja API"]
  },
  {
    name: "Financial Transaction Gateway – Africom Media LTD",
    description: "Built a secure full-stack transaction system supporting peer-to-peer transfers, user authentication, and transaction reporting.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Thymeleaf"]
  }
];
