import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📬 Get In Touch
      </motion.h2>

      <motion.p
        className="text-center mb-10 text-base-content/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have an idea, proposal, or just want to say hello? Drop a message or connect via socials.
      </motion.p>

      <motion.form
        className="grid gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        onSubmit={e => {
          e.preventDefault();
          alert(
            '🛠 Message submission functionality is a placeholder. Plug in EmailJS or backend to enable.',
          );
        }}
      >
        <input type="text" placeholder="Name" className="input input-bordered w-full" required />
        <input type="email" placeholder="Email" className="input input-bordered w-full" required />
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered h-32"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-fit mx-auto">
          Send Message 🚀
        </button>
      </motion.form>

      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/feargod12"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/onyenike-chukwudi"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
