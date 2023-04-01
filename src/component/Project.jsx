import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../context/HomeState";
import "./styles.css";

const Project = () => {
  let arr = [];
  const [ed, setEd] = useState({
    name: "",
    github: "",
    description: "",
    technology: "",
  });
  let { project, setProject } = useContext(HomeContext);

  const [prevIndex, setPrevIndex] = useState(-1);
  const [index, setIndex] = useState(0);
  const handleChange = (e) => {
    setEd((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    arr = project.concat(ed);
    console.log(arr);
    setProject((state) => {
      return arr;
    });
    setIndex(index + 1);
    handleClear();
    console.log(project);
  };
  const handleClear = () => {
    setEd({
      name: "",
      github: "",
      description: "",
      technology: "",
    });
  };

  return (
    <div className="form">
      {project.length > 0 && <span>Previous Previos:</span>}
      {project.length > 0 &&
        project.map((item, index) => {
          return (
            <span
              className="ed"
              key={index}
              onClick={() => setPrevIndex(index)}
            >
              Pr:{index}
            </span>
          );
        })}
      <br />
      <br />
      {project.length > 0 && (
        <span
          onClick={() => {
            setPrevIndex(-1);
            setIndex((prev) => prev + 1);
          }}
        >
          New+
        </span>
      )}

      {prevIndex !== -1 ? (
        <>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name of Project"
                name={"name"}
                value={project[prevIndex].name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Github Url"
                  name="github"
                  value={project[prevIndex].github}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Descrption"
                  name={"description"}
                  value={project[prevIndex].description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Technology Used"
                  name={"technology"}
                  value={project[prevIndex].technology}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name of Project"
                name={"name"}
                value={ed.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Github Url"
                  name="github"
                  value={ed.github}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Descrption"
                  name={"description"}
                  value={ed.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Technology Used"
                  name={"technology"}
                  value={ed.technology}
                  onChange={handleChange}
                />
              </div>
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
        </>
      )}
    </div>
  );
};

export default Project;
