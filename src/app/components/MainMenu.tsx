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
    <nav className="flex flex-row justify-around w-[1024px]">
      {menuItems.map((item) => (
        <div
          key={item.name}
          // Include additional classes along with the conditional styles.selected class
          className={`${
            props.activeItem === item.name ? styles.selected : ""
          } ${styles.menuItem} text-5xl hover:cursor-pointer`}
          onClick={() => props.handleItemSelect(item.name)}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
