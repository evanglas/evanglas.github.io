import courseData from "./coursework.json" assert { type: "json" };
import Course from "./Course";
import CourseCard from "./CourseCard";

interface CourseData {
  [key: string]: Course;
}

const coursesDict: CourseData = courseData;

export default function Courses() {
  return (
    <div className="flex flex-row flex-wrap justify-around max-w-7xl">
      {Object.entries(coursesDict).map(([id, course]) => (
        <CourseCard key={id} course={course} />
      ))}
    </div>
  );
}
