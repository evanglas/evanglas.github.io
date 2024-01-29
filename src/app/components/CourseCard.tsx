import Course from "./Course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="rounded-xl w-72 lg:w-80 p-5 border-2 border-black m-5">
      <div className="text-center text-lg font-bold pb-2">
        {course.departmentCode + " " + course.courseNumber}
      </div>
      <div className="text-center text-lg pb-2">{course.courseName}</div>
    </div>
  );
}
