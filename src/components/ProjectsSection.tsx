import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Peerpay Network',
    desc: 'Microservices architecture using NestJS, Kafka, AWS, and a Next.js frontend.',
    tech: ['NestJS', 'Kafka', 'Next.js', 'AWS'],
    live: '',
    code: 'https://github.com/feargod12/peerpay-network',
  },
  {
    title: 'Rokswood Utility App',
    desc: 'IoT integration with MQTT, payment systems (wallet/paystack/paygate), hosted on AWS.',
    tech: ['MQTT', 'AWS', 'NestJS', 'Paystack'],
    live: '',
    code: 'https://github.com/feargod12/rokswood-utility',
  },
  {
    title: 'Agrify SIP App',
    desc: 'Subscription backend with WebSockets + payment system, written in NestJS.',
    tech: ['NestJS', 'WebSockets', 'Paystack'],
    live: '',
    code: 'https://github.com/feargod12/agrify-sip',
  },
  {
    title: 'Horlamichemicals Website',
    desc: 'React-based UI, mobile responsive, with Paystack payment integration.',
    tech: ['React', 'Paystack', 'Tailwind'],
    live: '',
    code: 'https://github.com/feargod12/horlamichemicals',
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-base-200 p-6 rounded-box shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-sm mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {proj.tech.map((t, j) => (
                <span key={j} className="badge badge-outline">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 text-lg">
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="hover:text-primary">
                  <FaExternalLinkAlt />
                </a>
              )}
              <a href={proj.code} target="_blank" rel="noreferrer" className="hover:text-primary">
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
