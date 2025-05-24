import { motion } from 'framer-motion';

const ResumeSection = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      {/* <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📄 My Resume
      </motion.h2> */}

      <div className="text-center mb-6">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Download Resume
        </a>
      </div>

      <motion.div
        className="w-full h-[80vh] border rounded-box overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <iframe src="/resume.pdf" className="w-full h-full" title="Resume PDF"></iframe>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
