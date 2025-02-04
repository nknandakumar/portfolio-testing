import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Social Links Data
const socialLinks = [
  { href: "mailto:nandakumar.m.dev@gmail.com", icon: faEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/nanda-kumar-m-852411339/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/nknandakumar", icon: faGithub, label: "GitHub" },
  { href: "https://www.instagram.com/nandakumar__05/", icon: faInstagram, label: "Instagram" },
  { href: "https://x.com/NandaKumarM_dev", icon: faXTwitter, label: "Twitter (X)" }
];

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="center flex flex-col items-center bg-black pb-20 relative text-white z-20 px-6 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-main font-semibold text-[40px] md:text-[60px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 pt-20 mb-2"
      >
        Contact
      </motion.h2>

      <motion.blockquote
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xl italic font-semibold text-gray-900 dark:text-white text-center"
      >
        <p> <FontAwesomeIcon icon={faQuoteLeft} className="w-6 h-6 sm:w-10 sm:h-10 text-gray-400" /> I'm excited to connect with other developers and collaborate on projects or learn from experienced professionals. <FontAwesomeIcon icon={faQuoteRight} className="w-6 h-6 text-gray-400 sm:w-10 sm:h-10" /></p>
      </motion.blockquote>

      {/* Social Media Links with Staggered Animation */}
      <motion.div
        className="flex space-x-4 sm:space-x-6 mt-8"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"

          >
            <FontAwesomeIcon icon={link.icon} className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        ))}
      </motion.div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8 w-full max-w-2xl" />

      {/* Footer */}
      <span className="block text-sm text-gray-50 sm:text-center dark:text-gray-400">
        © {currentYear} Nanda Kumar M. All Rights Reserved.
      </span>
    </div>
  );
};

export default Contact;
