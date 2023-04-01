import React, { useContext, useState } from "react";
import { HomeContext } from "../context/HomeState";
import "./styles.css";

const BasicInfo = () => {
  const { basicInfo, setBasicInfo } = useContext(HomeContext);
  const handleChange = (e) => {
    setBasicInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log(basicInfo);
  };
  const handleClear = () => {
    setBasicInfo({
      name: "",

      gmail: "",
      phone: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      github: "",
      website: "",
      about: "",
    });
  };
  return (
    <div className="form">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name={"name"}
            value={basicInfo.name}
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
              placeholder="Enter Your Gmail"
              name="gmail"
              value={basicInfo.gmail}
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
              placeholder="Enter Your  Phone No"
              name={"phone"}
              value={basicInfo.phone}
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
              placeholder="Enter Your Linkedin Id"
              name={"linkedin"}
              value={basicInfo.linkedin}
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
              placeholder="Enter Coding Profile (gfg/leetcode/codechef) Link"
              name={"facebook"}
              value={basicInfo.facebook}
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
              placeholder="Enter Github Id"
              name={"github"}
              value={basicInfo.github}
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
              placeholder="Enter Your Working Profession "
              name={"profession"}
              value={basicInfo.profession}
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
              placeholder="Enter Your Website/Portfolio Url "
              name={"website"}
              value={basicInfo.website}
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
              placeholder="Enter Your Summary "
              name={"about"}
              value={basicInfo.about}
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
    </div>
  );
};

export default BasicInfo;
