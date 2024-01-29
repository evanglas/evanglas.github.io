export default interface Course {
  departmentCode: string;
  departmentName: string;
  courseNumber: string;
  courseName: string;
  courseDescription: string;
  term: string;
  year: string;
  crosslistings?: { departmentCode: string; courseNumber: string }[];
}
