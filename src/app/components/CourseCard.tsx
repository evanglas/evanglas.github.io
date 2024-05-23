import Course from "./Course";
import { useState } from "react";
import CourseModal from "./CourseModal";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="rounded-xl w-72 lg:w-80 p-5 border-2 border-black m-5 cursor-pointer hover:bg-emerald-200 hover:bg-opacity-90 shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
      >
        <div className="text-center text-lg font-bold pb-2">
          {course.departmentCode + " " + course.courseNumber}
        </div>
        <div className="text-center text-lg pb-2">{course.courseName}</div>
      </div>
      <CourseModal isOpen={isOpen} onClose={closeModal}>
        <h2 className="font-bold text-2xl pb-2">
          {course.departmentCode + " " + course.courseNumber}
        </h2>
        <p>{course.courseDescription}</p>
      </CourseModal>
    </>
  );
}
