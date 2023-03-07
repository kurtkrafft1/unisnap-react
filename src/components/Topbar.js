import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { slide as Menu } from "react-burger-menu";

const TopBar = () => {
  const { authToken, logout } = useAuth();
  const classes = "flex w-full h-full flex-row justify-between items-center";
  const navigate = useNavigate();

  const authedMenu = () => {
    return authToken ? (
      <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="groups" className="menu-item" href="/groups">
          Groups
        </a>
        <a id="invites" className="menu-item" href="/invites">
          Invites
        </a>
        <a onClick={logoutClicked} className="menu-item--small" href="">
          Logout
        </a>
      </Menu>
    ) : (
      ""
    );
  };

  const returnHeaderClasses = () => {
    return authToken
      ? classes
      : "flex w-full h-full flex-row justify-center items-center";
  };
  const logoutClicked = (event) => {
    event.preventDefault();
    if (authToken) logout();
  };
  const unisnapClicked = (event) => {
    event.preventDefault();
    if (authToken) navigate("/");
  };

  return (
    <div className="w-full h-20 bg-gray-200 px-4">
      <div className={returnHeaderClasses()}>
        <button onClick={unisnapClicked} className="text-3xl font-bold">
          Unisnap
        </button>
        <div className="">{authedMenu()}</div>
      </div>
    </div>
  );
};

export default TopBar;
