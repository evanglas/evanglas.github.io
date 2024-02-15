import React, { useState } from "react";
import courseData from "./coursework.json";
import Course from "./Course";
import CourseCard from "./CourseCard";

interface CourseData {
  [key: string]: Course;
}

const coursesDict: CourseData = courseData;

const sortByMap: { [key: string]: string } = {
  "Most Recent": "year",
  Department: "departmentCode",
};

const Courses: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("year"); // Default sorting by dateTaken
  const [filterBy, setFilterBy] = useState<string>(""); // No default filter

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const sortedAndFilteredCourses = Object.values(coursesDict)
    .filter((course) => {
      if (filterBy === "") {
        return true;
      }
    })
    .sort((a, b) => {
      const aValue =
        typeof a[sortBy] === "string" ? parseFloat(a[sortBy]) : a[sortBy];
      const bValue =
        typeof b[sortBy] === "string" ? parseFloat(b[sortBy]) : b[sortBy];

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return bValue - aValue; // Sort numbers least to greatest
      } else if (
        typeof a[sortBy] === "string" &&
        typeof b[sortBy] === "string"
      ) {
        return a[sortBy].localeCompare(b[sortBy]); // Sort strings alphabetically
      } else {
        return 0; // No sorting applied
      }
    });

  return (
    <div className="flex flex-col items-center max-w-7xl">
      <div className="flex flex-row w-full justify-center mt-5">
        <div className="flex flex-row justify-center w-52">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" onChange={handleSortChange} value={sortBy}>
            {Object.entries(sortByMap).map(([label, key]) => (
              <option className="text-center" key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="flex flex-row justify-center w-52">
          <label htmlFor="filter">Filter By:</label>
          <select id="filter" onChange={handleFilterChange} value={filterBy}>
            <option value="">None</option>
          </select>
        </div> */}
      </div>
      <div className="flex flex-row flex-wrap justify-around max-w-7xl">
        {sortedAndFilteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
