import { motion } from "framer-motion";
import RootMiddleware from "@/middleware/root";

const images1 = [
  "./tailwind.png",
  "./nextjs.svg",
  "./typescript.png",
  "./laravel.png",
  "./react.png",
  "./nodejs.png",
];
const images2 = [
  "./golang.png",
  "./docker.png",
  "./svelte.png",
  "./vue.png",
  "./git.png",
  "./angular.png",
];

const SkillsLayout = () => {
  return (
    <RootMiddleware>
      <div className="mt-[400px]" id="skills">
        <div className="">
          <h1 className="text-center text-3xl">
            <motion.b initial={{ x:-20 }} animate={{ x:0 }}>My</motion.b> <motion.i initial={{ x:20 }} animate={{ x:0 }}>Skills</motion.i>
          </h1>
          <div className="box justify-center items-center gap-[30px] mt-5">
            <div className="flex flex-wrap justify-center items-center">
              {images1.map((image, index) => (
                <motion.div
                  key={index}
                  className="box flex justify-center items-center gap-[30px] mt-5"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 3, delay: index * 0.5 },
                  }}
                >
                  <img src={image} alt="" className="w-[50px] mx-[10px] rounded-md" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center">
              {images2.map((image, index) => (
                <motion.div
                  key={index}
                  className="box flex justify-center items-center gap-[30px] mt-5"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 3, delay: (index + images1.length) * 0.5 },
                  }}
                >
                  <img src={image} alt="" className="w-[50px] rounded-md mx-[10px]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootMiddleware>
  );
};

export default SkillsLayout;
