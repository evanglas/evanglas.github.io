import React, { ReactNode, useEffect } from "react";
import styles from "./CourseModal.module.css";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    // Add event listener to close the modal when clicking outside
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof HTMLElement) {
        if (!event.target.closest(`.${styles["modal-content"]}`)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      // Remove event listener when component unmounts or modal is closed
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles["modal-content"]}>
          {/* <span className={styles["close-button"]} onClick={onClose}>
            &times;
          </span> */}
          {children}
        </div>
      </div>
    )
  );
};

export default CourseModal;
