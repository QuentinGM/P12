import React, { useState } from "react";

const WorkCard = ({ img, name, description, onClick, hoverDescription, middleDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link relative"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className={`h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300 ${
            isHovered ? "filter brightness-50" : ""
          }`}
          src={img}
        />
        {isHovered && hoverDescription && (
          <div className="absolute top-0 inset-x-0 text-center pt-4 pointer-events-none">
            <p className="text-white p-4">{hoverDescription}</p>
          </div>
        )}
        {isHovered && middleDescription && (
          <div className="absolute inset-x-0 text-center pt-4 pointer-events-none top-1/2 transform -translate-y-full">
            <p className="text-white p-4">{middleDescription}</p>
          </div>
        )}
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
