import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaDocker } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
} from 'react-icons/si';

const tech = {
  Frontend: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <SiTypescript />],
  Backend: [<FaNodeJs />, <SiNestjs />, <FaPython />, <SiFlask />, <SiFastapi />],
  Database: [<SiPostgresql />, <SiMongodb />, <FaDatabase />],
  Cloud_DevOps: [<FaAws />, <FaDocker />],
};

const AboutSection = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👨‍💻 About Me
      </motion.h2>

      <motion.p
        className="text-lg leading-7 mb-8 text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I'm a performance-focused Full-Stack Engineer and Software Solutions Architect with
        professional experience across cloud-native systems, scalable backend services, and
        user-friendly frontend applications. I thrive on clean architecture, modern DevOps, and
        open-source solutions.
      </motion.p>

      <motion.h3
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🧰 Tech Stack
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(tech).map(([category, icons]) => (
          <motion.div
            key={category}
            className="bg-base-200 p-4 rounded-box shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-2">{category.replace('_', ' & ')}</h4>
            <div className="flex flex-wrap justify-center gap-4 text-3xl text-primary">
              {icons.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
