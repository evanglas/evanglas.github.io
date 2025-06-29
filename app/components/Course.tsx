export default interface Course {
  [key: string]: any; // Index signature for dynamic access to properties
  departmentCode: string;
  departmentName: string;
  courseNumber: string;
  courseName: string;
  courseDescription: string;
  term: string;
  year: string;
  crosslistings?: { departmentCode: string; courseNumber: string }[];
}
