import { motion } from 'framer-motion';

const Hero = () => {
  // Toast notification function
  const showToast = (message: string) => {
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.className =
      'toast-notification fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-out';
    toast.innerHTML = `
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <span class="font-medium">${message}</span>
      </div>
    `;

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 10);

    // Animate out and remove
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 2000);
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    showToast(message);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

      {/* Animated circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          ONYENIKE CHUKWUDI FEARGOD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-2"
        >
          Full-Stack Software Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 mb-6"
        >
          📍 Lagos State, Nigeria
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mb-8 text-gray-300"
        >
          <div className="flex gap-2">
            <p
              className="cursor-pointer hover:text-purple-400 transition-colors"
              onClick={() => copyToClipboard('+234 808 447 7096', 'Phone number copied!')}
              title="Click to copy phone number"
            >
              📞 +234 808 447 7096
            </p>
            <span>|</span>
            <p
              className="cursor-pointer hover:text-purple-400 transition-colors"
              onClick={() => copyToClipboard('+234 816 064 7655', 'Phone number copied!')}
              title="Click to copy phone number"
            >
              +234 816 064 7655
            </p>
          </div>
          <p>
            📧 <a href="mailto:onyenikechukwudi@gmail.com">onyenikechukwudi@gmail.com</a>
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/onyenike-chukwudi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/feargod12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-medium hover:bg-purple-900/20 transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-2 bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
