import Link from "next/link";
import { motion } from "framer-motion";
import RootMiddleware from "@/middleware/root";

export default function HeroLayout() {
  return (
    <>
      <RootMiddleware>
      <div className="hero" id="home">
        <div className="box flex justify-center items-center h-[100vh] text-center">
          <div>
            <div className="flex justify-between items-center">
              <motion.img
                src="./arrow-style.svg"
                className="lg:rotate-[20deg] lg:w-[100px] w-[70px] mx-[100px] lg:block hidden"
                animate={{ x: 90 }}
              />
              <motion.h1
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                className="lg:text-6xl text-3xl font-semibold"
              >
                Soryy Sir, This Page is {" "}
                <motion.i className="underline">
                  {" "}
                  Not Found
                </motion.i>{" "}
              </motion.h1>
              <motion.img
                src="./arrow-style.svg"
                className="lg:rotate-[180deg] lg:w-[100px] w-[70px] mx-[100px] lg:block hidden"
                animate={{ x: -80, rotate: 180 }}
              />
            </div>
            <p className="my-5 lg:w-[100%]">
              Let me introduce myself, <i className="font-bold">Ahmad Rafi'i</i>
              . I come from <i className="font-bold">SMKN 6 Malang</i> and I am
              a <i className="font-bold">Full-Stack Developer</i>
            </p>
            <div className="flex gap-[10px] items-center justify-center">
              <Link
                href="/"
                className="border border-black text-black px-[20px] py-[7px] text-center items-center gap-[10px] rounded-md hover:shadow-lg"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      </RootMiddleware>
    </>
  );
}
