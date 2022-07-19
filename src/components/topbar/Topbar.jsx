import React from "react";
import "./Topbar.css";
import smit from "../images/smit.jpg"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Smit Tech</span>
        </div>
        <div className="topRight">
          <div className="topbarIconcontainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconcontainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconcontainer">
            <Settings />
          </div>
          <img className="topAvatar"  src={smit} alt="" />
        </div>
      </div>
    </div>
  );
}
