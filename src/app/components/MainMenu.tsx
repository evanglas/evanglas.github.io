import styles from "./MainMenu.module.css";
import { useState } from "react";

interface MainMenuProps {
  // Define the properties you want to pass to MainMenu
  activeItem: string;
  handleItemSelect: (itemId: string) => void;
}

const MainMenu = (props: {
  activeItem: string;
  handleItemSelect: (itemId: string) => void;
}) => {
  const menuItems = [
    { name: "Projects" },
    { name: "Coursework" },
    { name: "Other" },
  ];
  return (
    <nav className="flex flex-row flex-wrap justify-around lg:w-[1024px] md:w-[768px] w-[500px]">
      {menuItems.map((item) => (
        <div
          key={item.name}
          // Include additional classes along with the conditional styles.selected class
          className={`${
            props.activeItem === item.name ? styles.selected : ""
          } ${styles.menuItem} text-5xl hover:cursor-pointer ml-5 mr-5`}
          onClick={() => props.handleItemSelect(item.name)}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
