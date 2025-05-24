import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have vanished into the digital void. Let's get you
            back on track!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            Back to Home
          </Link>
          <div className="mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Or try these pages:</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link
                to="/about"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900/20 blur-3xl -z-10"
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
          className="absolute w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/20 blur-3xl -z-10"
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
      </div>
    </div>
  );
};

export default NotFound;
