"use client";

import MainContent from "./pages/MainContent";
import Landing from "./pages/Landing";
import ArrowSection from "./pages/ArrowSection";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <div id="index_wrapper" className="flex flex-col w-full items-center">
      <Landing />
      <ArrowSection />
      <MainContent />
    </div>
  );
}
