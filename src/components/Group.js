import React from "react";
import default_group from "../assets/images/default_group.png";
import { GrGroup } from "react-icons/gr";

const Group = ({ group }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="shadow rounded-full">
          <GrGroup className="rounded-full" size="4rem" />
        </div>
        <div>{group.name}</div>
      </div>
    </div>
  );
};

export default Group;
