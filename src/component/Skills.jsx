import React, { useContext, useState } from "react";
import { HomeContext } from "../context/HomeState";
import "./styles.css";

const Skills = () => {
  const { skills, setSkills } = useContext(HomeContext);

  const handleChange = (e) => {
    setSkills((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log(skills);
  };
  const handleClear = () => {
    setSkills({
      name: "",

      familiar: "",
    });
  };
  return (
    <div className="form">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" Skills Familiar With..."
            name={"familiar"}
            value={skills.familiar}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Intermediate Skills..."
            name={"name"}
            value={skills.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-success"
          onClick={handleSubmit}
          style={{ width: "20vw" }}
        >
          Save
        </button>
        <button
          className="btn btn-danger ms-4"
          onClick={handleClear}
          style={{ width: "20vw" }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Skills;
