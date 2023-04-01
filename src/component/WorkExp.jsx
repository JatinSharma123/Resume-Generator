import React, { useContext, useState } from "react";
import { HomeContext } from "../context/HomeState";
import "./styles.css";

const WorkExp = () => {
  const { work, setWork } = useContext(HomeContext);

  const [prevIndex, setPrevIndex] = useState(-1);
  const [index, setIndex] = useState(0);
  let arr = [];
  const [ed, setEd] = useState({
    companyname: "",
    description: "",
    from: "",
    to: "",
    location: "",
    type: "",
    technology: "",
  });
  const handleChange = (e) => {
    setEd((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    arr = work.concat(ed);
    console.log(arr);
    setWork((state) => {
      return arr;
    });
    setIndex(index + 1);
    handleClear();
  };
  const handleClear = () => {
    setEd({
      companyname: "",
      description: "",
      from: "",
      to: "",
      location: "",
      type: "",
      technology: "",
    });
  };
  return (
    <div className="form">
      {work.length > 0 && <span>Previous Experience:</span>}
      {work.length > 0 &&
        work.map((item, index) => {
          return (
            <span
              className="ed"
              key={index}
              onClick={() => setPrevIndex(index)}
            >
              Work:{index}
            </span>
          );
        })}
      <br />
      <br />
      {work.length > 0 && (
        <span
          onClick={() => {
            handleClear();
            setIndex(index + 1);
            setPrevIndex(-1);
          }}
        >
          New++
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
                placeholder="Enter Company  name"
                name={"companyname"}
                value={work[prevIndex].companyname}
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
                  placeholder="Location"
                  name="location"
                  value={work[prevIndex].location}
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
                  value={work[prevIndex].from}
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
                  value={work[prevIndex].to}
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
                  placeholder="Description"
                  name={"description"}
                  value={work[prevIndex].description}
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
                  placeholder="Technology Used"
                  name={"technology"}
                  onChange={handleChange}
                  value={work[prevIndex].technology}
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
      ) : (
        <>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Company  name"
                name={"companyname"}
                value={ed.companyname}
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
                  placeholder="Location"
                  name="location"
                  value={ed.location}
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
                  value={ed.from}
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
                  value={ed.to}
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
                  placeholder="Description"
                  name={"description"}
                  value={ed.description}
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
                  placeholder="Technology Used"
                  name={"technology"}
                  onChange={handleChange}
                  value={ed.technology}
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
            placeholder="Enter Company  name"
            name={"companyname"}
            value={ed.companyname}
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
              placeholder="Location"
              name="location"
              value={ed.location}
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
              value={ed.from}
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
              value={ed.to}
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
              placeholder="Description"
              name={"description"}
              value={ed.description}
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
              placeholder="Technology Used"
              name={"technology"}
              onChange={handleChange}
              value={ed.technology}
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
      </div> */}
    </div>
  );
};

export default WorkExp;
