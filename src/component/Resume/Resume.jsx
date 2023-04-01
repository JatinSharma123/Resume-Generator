import React, { forwardRef, useContext, useRef, useState } from "react";
import { HomeContext } from "../../context/HomeState";
import "./Resume.css";
const Resume = forwardRef((props, ref) => {
  const { basicInfo, skills, project, work, education } =
    useContext(HomeContext);
  const containerRef = useRef();

  return (
    <div ref={ref}>
      <div ref={containerRef} className="resume">
        <div className="resume_left">
          {/* <div className="resume_profile">
            <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
          </div> */}
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">
                  {basicInfo?.name?.length > 4
                    ? basicInfo?.name
                    : "Steve Austin"}
                </p>
                <p className="regular">
                  {basicInfo?.profession ? basicInfo?.profession : "Designer"}
                </p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="data">
                    {" "}
                    {basicInfo?.phone ? basicInfo?.phone : "9494949"}
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="data">
                    {" "}
                    {basicInfo?.gmail ? basicInfo?.gmail : "stephen@gmail.com"}
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-weebly" />
                  </div>
                  <div className="data">
                    {" "}
                    {basicInfo?.website
                      ? basicInfo?.website
                      : "  www.stephen.com"}
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <i className="fab fa-weebly" />
                  </div>
                  <div className="data">
                    {" "}
                    {basicInfo?.website
                      ? basicInfo?.website
                      : "  www.stephen.com"}
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <i className="fab fa-weebly" />
                  </div>
                  <div className="data">
                    {" "}
                    {basicInfo?.website
                      ? basicInfo?.website
                      : "  www.stephen.com"}
                  </div>
                </li>
              </ul>
            </div>

            {/* <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-square" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Github</p>
                    <p></p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div> */}
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {skills?.name?.split(",")?.map((item) => {
                      return <div className="bold">{item}</div>;
                    })}
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's familiar with</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {skills?.familiar?.split(",")?.map((item) => {
                      return <div className="bold">{item}</div>;
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About us</p>
            </div>
            <p>
              {basicInfo?.about
                ? basicInfo?.about
                : "  Fulll stack sjffkfkffkggkk"}
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              {work?.map((item) => {
                return (
                  <li>
                    <div className="date">
                      {" "}
                      {item.from}-{item.to}
                    </div>
                    <div className="info">
                      <p className="semi-bold">{item?.companyname}</p>
                      <p>{item?.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              {education.map((item) => {
                return (
                  <li>
                    <div className="date">
                      {item?.from} - {item.to}
                    </div>
                    <div className="info">
                      <p className="semi-bold"> {item?.schoolname}</p>
                      <p className="semi-bold"> {item?.cgpa}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="resume_item resume_hobb">
            <div className="title">
              <p className="bold">Projects</p>
            </div>
            <ul>
              {project?.map((item) => {
                return (
                  <li>
                    {" "}
                    <div className="row-project">
                      <div className="col-md-5">
                        <p className="semi-bold">
                          {" "}
                          {item?.name ? item?.name : "XXXX"}
                        </p>
                      </div>

                      <div className="col-md-7">
                        <p>
                          {" "}
                          <span className="semi-bold">Github: </span>
                          {item?.github ? item?.github : "XXXX"}{" "}
                        </p>
                      </div>
                    </div>
                    <p> {item?.description ? item?.description : "XXXX"}</p>
                    <p style={{ position: "relative", top: "-16px" }}>
                      <span className="semi-bold">Tech Used:</span>
                      {item?.technology ? item?.technology : "XXXX"}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
