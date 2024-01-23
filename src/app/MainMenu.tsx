import styles from "./MainMenu.module.css";
import { useState } from "react";

// interface MainMenuProps {
//   // Define the properties you want to pass to MainMenu
//   activeItem: string;
//   handleItemSelect: (itemId: string) => void;
// }

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("Projects");

  const handleItemSelect = (itemId: string) => {
    setActiveItem(itemId);
  };
  const menuItems = [
    { name: "Projects" },
    { name: "Coursework" },
    { name: "Other" },
  ];
  return (
    <nav className={`flex flex-row justify-around w-full`}>
      {menuItems.map((item) => (
        <div
          key={item.name}
          // Include additional classes along with the conditional styles.selected class
          className={`${activeItem === item.name ? styles.selected : ""} ${
            styles.menuItem
          } text-5xl hover:cursor-pointer`}
          onClick={() => handleItemSelect(item.name)}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
