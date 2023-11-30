import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsLayout() {
  return (
    <>
      <div className="hero" id="project">
        <div className="box flex justify-center items-center h-[100vh] text-center">
          <div>
            <div className="flex justify-between items-center">
              <motion.img
                src="./arrow-style.svg"
                className="lg:rotate-[20deg] lg:w-[100px] w-[70px] mx-[100px] lg:block hidden"
                animate={{ x: 90 }}
              />
              <div>
                <motion.h1
                  initial={{ x: 10 }}
                  animate={{ x: 0 }}
                  className="lg:text-6xl text-3xl font-semibold"
                >
                  View my all project on Github
                  <motion.i className="underline">
                    {" "}
                    rafia9005
                    <br className="lg:block hidden" />
                  </motion.i>{" "}
                  Or click this button <br className="lg:block hidden" />
                </motion.h1>
                <div className="mt-5">
                  <Link
                    href="https://github.com/rafia9005"
                    className="bg-black text-white text-5xl px-5 rounded-md"
                  >
                    Go To Github
                  </Link>
                </div>
              </div>
              <motion.img
                src="./arrow-style.svg"
                className="lg:rotate-[180deg] lg:w-[100px] w-[70px] mx-[100px] lg:block hidden"
                animate={{ x: -80, rotate: 180 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
