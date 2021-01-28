import React from "react";
import { useSelector } from "react-redux";

import User from "../User/User";
import "./App.css";

const App = () => {
  const userdata = useSelector((state) => state.userdata);
  console.log(userdata);
  return (
    <div className="app">
      <User />
      <div className="user-info-wrapper">
        <span className="normal-text">
          Hello <span className="highlight-text">{userdata.user}</span>
          {userdata && ","}
        </span>
        {userdata.country && (
          <span className="normal-text">
            From <span className="highlight-text">{userdata.country}</span>
          </span>
        )}
      </div>
      {userdata.data?.age && (
        <div className="age-prediction-wrapper">
          <span className="normal-text">
            I think you are
            <span className="highlight-text"> {userdata.data?.age}</span> years
            old!
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
