import React, { useEffect, useState } from "react";
import Group from "../components/Group";
import Loader from "../components/Loader";
import useAPI from "../hooks/useAPI";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = useAPI();

  useEffect(() => {
    api.get("/groups").then((res) => {
      setIsLoading(false);
      setGroups(res.data);
    });
  }, [api, setIsLoading, setGroups]);

  const checkForEmptyGroups = () => {
    if (groups.length === 0) {
      return (
        <div className=" mt-48 flex flex-col items-center">
          <div className="text-center text-2xl text-gray-500">
            You have no groups
          </div>
          <a className="underline text-gray-500 text-sm" href="/invites">
            Check your invites here
          </a>
        </div>
      );
    }
    return groups.map((group) => {
      console.log(group);
      return <Group group={group} />;
    });
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="text-lg">Your Groups</div>
      <div className="rounded w-full min-h-screen flex flex-row flex-wrap justify-evenly p-4">
        {isLoading ? <Loader /> : checkForEmptyGroups()}
      </div>
    </div>
  );
};

export default Groups;
