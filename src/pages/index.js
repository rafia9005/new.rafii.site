import { useState, useEffect } from "react";
import Image from "next/image";
import RootMiddleware from "@/middleware/root";
import NavbarLayout from "@/layouts/main/NavbarLayout";
import HeroLayout from "@/layouts/main/HeroLayout";
import AboutLayout from "@/layouts/main/AboutLayout";
import SkillsLayout from "@/layouts/main/SkillsLayout";
import ProjectLayout from "@/layouts/main/ProjectLayout";
import FooterLayout from "@/layouts/main/FooterLayout";

export default function Home() {
  return (
    <RootMiddleware>
      <h1>sorry this website off</h1>
    </RootMiddleware>
  );
}
