import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../context/HomeState";
import "./styles.css";

const Education = () => {
  const [school, setSchool] = useState("");
  let arr = [];
  const [ed, setEd] = useState({
    schoolname: "",

    from: "",
    to: "",
    cgpa: "",
  });
  let { education, setEducation } = useContext(HomeContext);
  console.log(education);

  const [prevIndex, setPrevIndex] = useState(-1);
  const [index, setIndex] = useState(0);
  const handleChange = (e) => {
    setEd((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    arr = education.concat(ed);
    console.log(arr);
    setEducation((state) => {
      return arr;
    });
    setIndex(index + 1);
    handleClear();
    console.log(education);
  };
  const handleClear = () => {
    setEd({
      schoolname: "",
      from: "",
      to: "",
      cgpa: "",
    });
  };
  if (prevIndex > 0) console.log("hello" + prevIndex);
  return (
    <div className="form">
      {education.length > 0 && <span>Previous Education:</span>}
      {education.length > 0 &&
        education.map((item, index) => {
          return (
            <span
              className="ed"
              key={index}
              onClick={() => setPrevIndex(index)}
            >
              Ed:{index}
            </span>
          );
        })}
      <br />
      <br />
      {education.length > 0 && (
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
                placeholder="Enter School name/College Name"
                //    name={"schoolname"}
                value={education[prevIndex]?.schoolname}
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter CGPA"
                  name={"cgpa"}
                  value={education[prevIndex]?.cgpa}
                  // value={tempeducation[index].cgpa}
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
                  placeholder="From"
                  name={"from"}
                  value={education[prevIndex]?.from}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="To.."
                  name={"to"}
                  value={education[prevIndex]?.to}
                  //    value={tempeducation[index].to}
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
                placeholder="Enter School name/College Name"
                name={"schoolname"}
                value={ed?.schoolname}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter CGPA"
                  name={"cgpa"}
                  value={ed?.cgpa}
                  // value={tempeducation[index].cgpa}
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
                  placeholder="From"
                  name={"from"}
                  value={ed?.from}
                  //  value={tempeducation[index].from}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="To.."
                  name={"to"}
                  value={ed?.to}
                  //    value={tempeducation[index].to}
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
      {/* <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter School name/College Name"
            // name={"schoolname"}
            value={education[index]?.schoolname}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter CGPA"
              name={"cgpa"}
              // value={tempeducation[index].cgpa}
              onChange={handleChange}
            />
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="From"
              name={"from"}
              //  value={tempeducation[index].from}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="To.."
              name={"to"}
              //    value={tempeducation[index].to}
              onChange={handleChange}
            />
          </div>
        </div>
      </div> */}

      {/* <div
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
      </div> */}
    </div>
  );
};

export default Education;
