import React, { useState, useRef } from "react";
import "./recs.css";
import { AiOutlineLeft, AiOutlineRight, TbDotsVertical } from "react-icons/all";
import RecsItem from "./RecsItem";

const RecsSection = () => {
  return (
    <div>
      <div className="recs-section-big">
        <div className="recs-section">
          <div className="head">
            {" "}
            <h2 className="head">More items to explore</h2>
            <p className="head-right">page 1 of 1</p>
            <TbDotsVertical className="head-right1" size="1.5em" />
          </div>
          <div className="btn-sections">
            <div className="left-side">
              <div className="btn-next-right">
                {" "}
                <span className="arrow-btn-outer">
                  {" "}
                  <i className="arrow-btn">
                    {" "}
                    <AiOutlineLeft size="1em" />
                  </i>
                </span>{" "}
              </div>
            </div>
            <div className="items">
              <RecsItem />
            </div>
            <div className="right-side">
              <div className="btn-next-left">
                {" "}
                <span className="arrow-btn-outer">
                  {" "}
                  <i className="arrow-btn">
                    {" "}
                    <AiOutlineRight size="1em" />
                  </i>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecsSection;
