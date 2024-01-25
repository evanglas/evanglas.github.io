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
        <div key={id} className="rounded-xl p-5 border-2 border-black m-5">
          <div className="w-72 lg:w-80 text-center text-lg font-bold pb-2">
            {course.courseName}
          </div>
          <div className="rounded-xl overflow-hidden">
            <CourseCard course={course} />
          </div>
        </div>
      ))}
    </div>
  );
}
