import React from "react";

const CategoryItem = ({ category }) => {
  const { id, categoryName, postNumber, icon } = category;
  return (
    <div className="bg-gray-50 rounded-lg p-10">
      <div className="p-3 rounded-lg bg-gray-200 w-fit">
        <img src={icon} alt="" className="w-10 h-10" />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">{categoryName}</h3>
        <h5 className="text-gray-500">{postNumber}+ Jobs Available</h5>
      </div>
    </div>
  );
};

export default CategoryItem;
