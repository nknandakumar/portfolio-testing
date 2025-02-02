import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="center flex flex-col items-center bg-black pb-20 relative text-white z-20 px-6 lg:px-32">
      <h2 className="font-main font-semibold text-[40px] md:text-[60px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 pt-20 mb-2">Contact</h2>
      
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white text-center">
        <p>"I'm excited to connect with other developers and collaborate on projects or learn from experienced professionals."</p>
      </blockquote>

      {/* Social Media Links with Icons */}
      <div className="flex space-x-4 sm:space-x-6 mt-8">
        {/* Email */}
        <a
          href="mailto:nandakumar.m.dev@gmail.com"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nanda-kumar-m-852411339/"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/nknandakumar"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/nandakumar__05/"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        {/* X (Twitter) */}
        <a
          href="https://x.com/NandaKumarM_dev"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-white transition duration-300"
        >
           <svg
      className="w-6 h-6 sm:w-8 sm:h-8"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
        </a>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8 w-full max-w-2xl" />
      
      {/* Footer */}
      <span className="block text-sm text-gray-50 sm:text-center dark:text-gray-400">
        © {currentYear} Nanda Kumar M. All Rights Reserved.
      </span>
    </div>
  );
};

export default Contact;