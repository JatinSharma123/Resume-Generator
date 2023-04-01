import React, { useEffect, useState } from "react";

import "./Home.css";
import BasicInfo from "../component/BasicInfo";
import Project from "../component/Project";
import WorkExp from "../component/WorkExp";
import Skills from "../component/Skills";
import Resume from "../component/Resume/Resume";
import Education from "../component/Education";
const Home = () => {
  const tabs = [
    "Basic Info",
    "Work Experience",
    "Projects",
    "Skills",
    "Education",
  ];
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    console.log(currentTab);
    tabShower();
  }, [currentTab]);

  const tabShower = () => {
    switch (currentTab) {
      case 0: {
        <BasicInfo />;
        break;
      }
      case 1: {
        <Project />;
        break;
      }
      case 2: {
        <WorkExp />;
        break;
      }
      case 3: {
        <Education />;
        break;
      }
      default: {
        return "";
      }
    }
  };
  return (
    <>
      <div className="home">
        <span>Enter your Details Here.. </span>
        <div
          className="row"
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              className={`${currentTab === 0 ? "active" : ""} `}
              onClick={() => {
                setCurrentTab(0);
                tabShower();
              }}
            >
              {tabs[0]}
            </span>
            <span
              className={`${currentTab === 1 ? "active" : ""} `}
              onClick={() => setCurrentTab(1)}
            >
              {tabs[1]}
            </span>
            <span
              className={`${currentTab === 2 ? "active" : ""} `}
              onClick={() => setCurrentTab(2)}
            >
              {tabs[2]}
            </span>
            <span
              className={`${currentTab === 3 ? "active" : ""} `}
              onClick={() => setCurrentTab(3)}
            >
              {tabs[3]}
            </span>
            <span
              className={`${currentTab === 4 ? "active" : ""} `}
              onClick={() => setCurrentTab(4)}
            >
              {tabs[4]}
            </span>
          </div>
          <hr />
          <div>
            {currentTab === 0 ? (
              <BasicInfo />
            ) : currentTab === 1 ? (
              <WorkExp />
            ) : currentTab === 2 ? (
              <Project />
            ) : currentTab === 3 ? (
              <Skills />
            ) : (
              <Education />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
