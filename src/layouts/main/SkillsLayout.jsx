import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SkillsLayout() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Sesuaikan nilai offset dan durasi animasi sesuai kebutuhan
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.7 } });
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: -100 });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <motion.div
        className="lg:flex block items-center justify-center mt-[15%]"
        animate={controls}
      >
        <div className="text-start w-[80%]">
          <div className="flex">
            <h1 className="lg:text-[120px] text-4xl lg:px-0 px-[20px]">
              <b>My</b> Skills
            </h1>
            <motion.img
              src="arrow-style.svg"
              alt=""
              className="rotate-[90deg] lg:w-[100px] w-[50px]"
            />
          </div>
          <div className="flex items-center gap-[30px] justify-start lg:px-0 px-[10px] mt-[60px]">
            <motion.img
              src="nextjs.svg"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="tailwind.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="nest.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="django.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="golang.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="vue.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
          </div>
          <div className="flex items-center gap-[30px] justify-start lg:px-0 px-[10px] mt-[60px]">
            <motion.img
              src="angular.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="svelte.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="typescript.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="docker.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="laravel.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
            <motion.img
              src="react.png"
              alt=""
              className="lg:w-[100px] w-[40px] rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
