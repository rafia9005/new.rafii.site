import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ProjectLayout() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.7 } });
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: 200 });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <motion.div
        className="flex justify-end items-center px-[10%]"
        animate={controls}
      >
        <div>
          <div>
            <h1 className="text-[120px] text-end underline">Project</h1>
          </div>
          <div>
            <div className="mt-5">
              <img
                src="p1.png"
                alt=""
                className="w-[600px] border border-black border-[2px] rounded-lg"
              />
              <div className="flex justify-start items-center gap-[10px]">
              </div>
            </div>
            <div className="mt-[60px]">
              <img
                src="p2.png"
                alt=""
                className="w-[600px] border border-black border-[2px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
