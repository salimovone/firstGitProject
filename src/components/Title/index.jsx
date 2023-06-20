import React from "react";

const Title = ({ name }) => {
  return (
    <div>
      <h2 className="flex justify-center text-5xl">
        <div className="border-b-4 border-yellow-300 w-20 justify-center flex pb-2">{name}</div>
      </h2>
    </div>
  );
};

export default Title;
