import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Peerpay Network',
      description:
        'Built and deployed microservices using NestJS and Kafka, processing over 10,000 transactions monthly. Features include admin portals using Next.js and Tailwind CSS.',
      image: '/peerpaynetwork.png',
      tags: ['NestJS', 'Kafka', 'Next.js', 'AWS'],
      category: 'backend',
      link: 'https://peerpaynetwork.com',
    },
    {
      id: 2,
      title: 'Rokswood Utility App',
      description:
        'IoT integration with MQTT for smart meters, featuring wallet integrations with Paystack and Paygate. Hosted on AWS with optimized performance.',
      image: '/rokswood-utility.png',
      tags: ['IoT', 'MQTT', 'Paystack', 'AWS'],
      category: 'iot',
      link: 'https://www.rokswoodenergy.com',
    },
    {
      id: 3,
      title: 'Agrify TrueNature SIP App',
      description:
        'Subscription backend built with NestJS, featuring WebSocket notifications and integrated payment systems for seamless user experience.',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['NestJS', 'WebSockets', 'Payments'],
      category: 'backend',
      link: '#',
    },
    {
      id: 4,
      title: 'Rokswood Efab Website',
      description:
        'Modern React-based website and fully responsive design for optimal user experience across all devices.',
      image: '/rokswood-efab.png',
      tags: ['React', 'Next.js', 'TailwindCSS'],
      category: 'frontend',
      link: 'https://www.rokswoodefab.com',
    },
    {
      id: 5,
      title: 'Rokswood Energy Website',
      description:
        'Modern React-based website and fully responsive design for optimal user experience across all devices.',
      image: '/rokswood-energy.png',
      tags: ['React', 'Next.js', 'TailwindCSS'],
      category: 'frontend',
      link: 'https://www.rokswoodenergy.com',
    },
    {
      id: 6,
      title: 'Rokswood Main Website',
      description:
        'Modern React-based website and fully responsive design for optimal user experience across all devices.',
      image: '/rokswood.png',
      tags: ['React', 'Next.js', 'TailwindCSS'],
      category: 'frontend',
      link: 'https://www.rokswood.com',
    },
    {
      id: 7,
      title: 'Horlamichemicals Website',
      description:
        'Modern React-based website with Paystack integration and fully responsive design for optimal user experience across all devices.',
      image: '/horlamichemicals.png',
      tags: ['React', 'Paystack', 'Responsive'],
      category: 'frontend',
      link: 'https://www.horlamichemicals.com.ng',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter(project => project.category === filter);

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
          Recent Projects
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap gap-4">
            {['all', 'backend', 'frontend', 'iot'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    filter === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
