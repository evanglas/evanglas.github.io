import { useState } from "react";
import MainMenu from "../components/MainMenu";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import OtherPart from "../components/OtherPart";

export default function MainContent() {
  const [activeItem, setActiveItem] = useState<string>("Projects");
  const renderMainContent = () => {
    switch (activeItem) {
      case "Projects":
        return <Projects />;
      case "Coursework":
        return <Courses />;
      case "Other":
        return <OtherPart />;
      default:
        return <Projects />;
    }
  };
  return (
    <div className="flex flex-col items-center xl:w-[1500px] lg:w-[1024px] md:w-[768px] w-auto">
      <MainMenu activeItem={activeItem} handleItemSelect={setActiveItem} />
      <div className="flex flex-col items-center">{renderMainContent()}</div>
    </div>
  );
}