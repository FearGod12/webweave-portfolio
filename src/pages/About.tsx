import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'TypeScript', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'React/Next.js/TailwindCSS', level: 90 },
    { name: 'Flask/FastAPI', level: 90 },
    { name: 'Node.js/NestJS', level: 90 },
    { name: 'AWS', level: 85 },
    { name: 'Docker/Kubernetes', level: 80 },
    { name: 'PostgreSQL/MySQL', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'CI/CD', level: 80 },
    { name: 'Microservices', level: 90 },
    { name: 'API Design', level: 90 },
    { name: 'API Documentation', level: 90 },
    { name: 'API Testing', level: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
        >
          About Me
        </motion.h1>

        <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Detail-oriented and performance-driven Full-Stack Software Engineer with hands-on
            experience in building scalable, secure, and cloud-native web applications. Proficient
            in TypeScript, Python, React, and Next.js, with a deep understanding of modern backend
            architectures using Node.js, NestJS, Flask, and FastAPI. Adept at cloud platforms (AWS,
            GCP, Azure), containerization (Docker), and database management (SQL/NoSQL). Proven
            ability to collaborate cross-functionally and deliver optimized, production-ready
            solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                TypeScript Engineer (Full-Stack) - Peerpay Digital Assets Ltd
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria • Jan 2025 - Present
              </p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>
                  Architected and implemented microservices using NestJS and Kafka, handling over
                  10,000 transactions monthly with 99.9% reliability
                </li>
                <li>
                  Developed comprehensive admin portals using Next.js 14, TypeScript, and Tailwind
                  CSS, implementing real-time dashboards and analytics
                </li>
                <li>
                  Designed and implemented a robust CI/CD pipeline using GitHub Actions, reducing
                  deployment time by 60% and ensuring zero-downtime updates
                </li>
                <li>
                  Optimized AWS infrastructure using EC2, S3, and CloudFront, implementing
                  auto-scaling and load balancing for high availability
                </li>
                <li>
                  Implemented comprehensive monitoring using AWS CloudWatch and custom logging
                  solutions, reducing incident response time by 40%
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Software Engineer (Full-Stack) - Rokswood Group of Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ibadan, Nigeria • May 2022 - Present
              </p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>
                  Engineered high-performance REST APIs using Node.js and Express, implementing
                  Redis caching and query optimization, reducing response times by 30%
                </li>
                <li>
                  Developed real-time IoT monitoring system using MQTT protocol, handling data from
                  500+ smart meters with WebSocket integration for live updates
                </li>
                <li>
                  Implemented secure payment integrations with Paystack and Paygate, processing over
                  ₦50M in transactions with 99.99% success rate
                </li>
                <li>
                  Led cloud migration from traditional hosting to AWS, implementing containerization
                  with Docker and orchestration using Kubernetes
                </li>
                <li>
                  Built automated testing suite using Jest and Cypress, achieving 85% code coverage
                  and reducing bug reports by 45%
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Backend Software Developer - Horizons Software Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Remote • Jan 2021 - May 2022</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>
                  Developed scalable backend services using Node.js and Express, implementing
                  RESTful APIs consumed by 10+ frontend applications
                </li>
                <li>
                  Implemented comprehensive security measures using JWT authentication and
                  Role-Based Access Control (RBAC), reducing unauthorized access by 70%
                </li>
                <li>
                  Optimized database performance using PostgreSQL and MongoDB, implementing
                  efficient indexing and query optimization strategies
                </li>
                <li>
                  Created automated deployment pipelines using GitHub Actions and Docker, reducing
                  deployment time from hours to minutes
                </li>
                <li>
                  Implemented real-time features using Socket.io and Redis pub/sub, enabling instant
                  notifications and live updates across applications
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Intern Software Engineer - ALX
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria • Sep 2020 - Oct 2021
              </p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>
                  Developed secure e-commerce backend using Node.js and Express, implementing user
                  authentication and role-based access control
                </li>
                <li>
                  Created automated deployment pipelines using GitHub Actions and Docker, reducing
                  deployment time by 50% and ensuring consistent environments
                </li>
                <li>
                  Implemented payment gateway integration with Stripe and PayPal, handling secure
                  transactions and automated reconciliation
                </li>
                <li>
                  Built comprehensive API documentation using Swagger/OpenAPI, improving developer
                  onboarding time by 40%
                </li>
                <li>
                  Developed automated testing suite using Jest and Supertest, achieving 80% code
                  coverage and reducing production bugs by 35%
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Education</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Federal Polytechnic Auchi, Edo State, Nigeria
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                HND in Computer Science — Distinction (2018 – 2021)
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                ND in Computer Science — Distinction (2015 – 2017)
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Certifications
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• AWS Certified Solutions Architect – Associate (May 2025)</li>
                <li>• AWS Certified Cloud Practitioner (Jan 2025)</li>
                <li>• Backend Specialization – ALX Software Engineering Program (Nov 2022)</li>
                <li>• Full-Stack Web Development – New Horizons (July 2022)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
