import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function AboutLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!isVisible && scrollY > 100) {
        setIsVisible(true);
        controls1.start({ opacity: 1, y: 0 });
        controls2.start({ opacity: 1, y: 0 });
      }
    };

    if (controls1 && controls2) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2, isVisible]);

  return (
    <>
      <div className="lg:flex block justify-evenly items-center" id="about">
        <motion.div
          className="box aspect-w-1 aspect-h-1 flex justify-center items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={controls2}
        >
          <img
            src="https://avatars.githubusercontent.com/u/70046808?v=4"
            alt="my profile | rafii.site"
            className="border border-black rounded-md shadow-lg border-[2px] lg:w-[370px] w-[200px]"
          />
        </motion.div>
        <motion.div
          className="box lg:text-start text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={controls1}
        >
          <h1 className="text-2xl lg:mt-0 mt-5">
            Ahmad Rafi'i - <b>Full-Stack Developer</b>
          </h1>
          <p className="mt-5 lg:max-w-[600px] max-w[0] lg:w-auto lg:mx-auto w-[90%] mx-[5%]">
            Saya adalah Ahmad Rafi'i, seorang <b>Full-Stack Developer</b> dengan
            semangat untuk menciptakan solusi web yang inovatif. Dengan latar
            belakang dari <b>SMKN 6 Malang</b>, saya memiliki keahlian dalam
            menggabungkan teknologi <b>frontend</b> dan <b>backend</b> untuk
            menciptakan
            pengalaman pengguna yang luar biasa. Dalam setahun terakhir, saya
            telah membangun berbagai aplikasi yang efisien dan responsif. Saya
            senang memecahkan tantangan teknis dan selalu mencari peluang untuk
            belajar dan tumbuh dalam dunia pengembangan perangkat lunak.
          </p>
          <div className="mt-5">
            <Link
              href="/me"
              className="transition-all transform duration-300 ease-in-out border-black border font-bold hover:text-white hover:bg-black px-[20px] py-[10px] rounded-md"
            >
              Les't Go
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
