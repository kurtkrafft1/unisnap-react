import React from "react";
import default_group from "../assets/images/default_group.png";

const Group = (group) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full"
          src={group.image !== null ? group.image : default_group}
          alt="Group Image"
        />
        <div>{group.name}</div>
      </div>
    </div>
  );
};

export default Group;
