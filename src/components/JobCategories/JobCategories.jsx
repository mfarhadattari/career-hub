import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto py-20 px-5">
      <h1 className="text-4xl text-center font-extrabold">Job Category List</h1>
      <p className="text-lg text-center text-gray-700 mt-4 mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-5 justify-center items-center">
        {
            categories.map(category => <CategoryItem key={category.id} category={category}></CategoryItem>)
        }
      </div>
    </div>
  );
};

export default JobCategories;
