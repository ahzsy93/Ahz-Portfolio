import React, { useEffect, useState } from "react";

const CategoryChip = ({ category, onClick, allActive }) => {
  const [isActive, setIsActive] = useState(false);
  const [allActiveFlag, setAllActiveFlag] = useState(allActive);

  useEffect(() => {
    setAllActiveFlag(allActive ? true : false);
  }, [allActive]);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const styles = {
    active: `px-4 py-2 rounded-full text-white bg-red-500 font-bold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease`,
    inactive:
      "px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease",
  };
  return (
    <span
      onClick={() => {
        toggleClass();
        onClick();
      }}
      className={`${
        isActive || allActiveFlag ? styles.active : styles.inactive
      }`}
    >
      {category}
    </span>
  );
};

export default CategoryChip;
