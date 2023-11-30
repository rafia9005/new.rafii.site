import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function scrollToTarget(e, target) {
  e.preventDefault();

  document.querySelector(target).scrollIntoView({
    behavior: 'smooth',
  });
}

export default function NavbarLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        const target = e.target.getAttribute('href');
        scrollToTarget(e, target);
        setIsNavOpen(false); // Close the navbar after clicking a link
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <nav
        className="flex lg:justify-evenly justify-between items-center py-[10px] lg:px-0 px-5 fixed w-[100%] bg-white"
        style={{ zIndex: '2' }}
      >
        <div className="logo">
          <motion.h1
            initial={{ x: -30 }}
            animate={{ x: 0 }}
            className="text-2xl text-black font-semibold"
          >
            rafii.site
          </motion.h1>
        </div>
        <div className="flex items-center">
          <button
            className={`lg:hidden transition-all transform duration-300 ease-in-out ${
              isNavOpen ? 'rotate-[-90deg]' : 'rotate-0'
            }`}
            onClick={handleNavToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          <motion.ul
            initial={{ x: 30 }}
            animate={{ x: 0 }}
            className={`lg:flex gap-[10px] ${
              isNavOpen
                ? 'block absolute left-[5%] top-[350%] bg-white bg-opacity-90 w-[90%] py-10 transform -translate-x-1/2 -translate-y-1/2 Navbar text-center rounded-md'
                : 'hidden'
            }`}
          >
            <li className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">
              <Link href="#home">Home</Link>
            </li>
            <li className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">
              <Link href="#about">About</Link>
            </li>
            <li className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">
              <Link href="/#project">Projects</Link>
            </li>
            <li className="py-1 hover:border-black hover:border border border-white px-5 rounded-md">
              <Link href="/#contact">Contact</Link>
            </li>
          </motion.ul>
        </div>
      </nav>
    </>
  );
}
