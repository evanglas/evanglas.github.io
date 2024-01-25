import Course from "./Course";

export default function CourseCard(props: { course: Course }) {
  return (
    <div className="w-52 border-b-2 flex items-center">
      {props.course.courseName}
    </div>
  );
}
