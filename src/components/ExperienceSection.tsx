import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Peerpay Digital Assets Ltd',
    role: 'TypeScript Engineer (Full-Stack)',
    period: 'Jan 2025 – Present',
    details: [
      'Architected and implemented microservices using NestJS and Kafka, handling over 10,000 transactions monthly with 99.9% reliability',
      'Developed comprehensive admin portals using Next.js 14, TypeScript, and Tailwind CSS, implementing real-time dashboards and analytics',
      'Designed and implemented a robust CI/CD pipeline using GitHub Actions, reducing deployment time by 60% and ensuring zero-downtime updates',
      'Optimized AWS infrastructure using EC2, S3, and CloudFront, implementing auto-scaling and load balancing for high availability',
      'Implemented comprehensive monitoring using AWS CloudWatch and custom logging solutions, reducing incident response time by 40%',
    ],
  },
  {
    company: 'Rokswood Group of Companies',
    role: 'Software Engineer (Full-Stack)',
    period: 'May 2022 – Present',
    details: [
      'Engineered high-performance REST APIs using Node.js and Express, implementing Redis caching and query optimization, reducing response times by 30%',
      'Developed real-time IoT monitoring system using MQTT protocol, handling data from 500+ smart meters with WebSocket integration for live updates',
      'Implemented secure payment integrations with Paystack and Paygate, processing over ₦50M in transactions with 99.99% success rate',
      'Led cloud migration from traditional hosting to AWS, implementing containerization with Docker and orchestration using Kubernetes',
      'Built automated testing suite using Jest and Cypress, achieving 85% code coverage and reducing bug reports by 45%',
    ],
  },
  {
    company: 'Horizons Software Solutions',
    role: 'Backend Software Developer',
    period: 'Jan 2021 – May 2022',
    details: [
      'Developed scalable backend services using Node.js and Express, implementing RESTful APIs consumed by 10+ frontend applications',
      'Implemented comprehensive security measures using JWT authentication and Role-Based Access Control (RBAC), reducing unauthorized access by 70%',
      'Optimized database performance using PostgreSQL and MongoDB, implementing efficient indexing and query optimization strategies',
      'Created automated deployment pipelines using GitHub Actions and Docker, reducing deployment time from hours to minutes',
      'Implemented real-time features using Socket.io and Redis pub/sub, enabling instant notifications and live updates across applications',
    ],
  },
  {
    company: 'ALX',
    role: 'Intern Software Engineer',
    period: 'Sep 2020 – Oct 2021',
    details: [
      'Developed secure e-commerce backend using Node.js and Express, implementing user authentication and role-based access control',
      'Created automated deployment pipelines using GitHub Actions and Docker, reducing deployment time by 50% and ensuring consistent environments',
      'Implemented payment gateway integration with Stripe and PayPal, handling secure transactions and automated reconciliation',
      'Built comprehensive API documentation using Swagger/OpenAPI, improving developer onboarding time by 40%',
      'Developed automated testing suite using Jest and Supertest, achieving 80% code coverage and reducing production bugs by 35%',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🧭 Work Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 border-primary pl-6 py-4 bg-base-200 rounded-md shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-accent">
              {exp.company} — {exp.period}
            </p>
            <ul className="list-disc pl-4 mt-2 text-left">
              {exp.details.map((d, i) => (
                <li key={i} className="text-sm">
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
