import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import RootMiddleware from "@/middleware/root";
import NavbarLayout from "@/layouts/main/NavbarLayout";
import HeroLayout from "@/layouts/main/HeroLayout";
import AboutLayout from "@/layouts/main/AboutLayout";
import SkillsLayout from "@/layouts/main/SkillsLayout";
import ProjectsLayout from "@/layouts/main/ProjectsLayout";
import Contact from "@/layouts/main/ContactLayouts";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 5 ? prevDots + "." : "."));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <RootMiddleware>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div>
            <div className="rounded-full bg-black w-[60px] h-[60px] animate-bounce shadow-lg">
              <div className="rounded-full bg-white w-[40px] h-[40px] animate-bounce"></div>
            </div>
            <p className="text-center text-3xl">{dots}</p>
          </div>
        </div>
      ) : (
        <>
          <NavbarLayout />
          <HeroLayout />
          <AboutLayout />
          <SkillsLayout />
          <ProjectsLayout />
          <Contact />
          <footer className="bg-transparent text-black py-12">
            <div className="text-center mt-8">
              <p>
                &copy; {new Date().getFullYear()} rafii site. Hak Cipta
                Dilindungi Undang-Undang.
              </p>
            </div>
          </footer>
        </>
      )}
    </RootMiddleware>
  );
}