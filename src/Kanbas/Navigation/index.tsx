import { Link, useLocation } from "react-router-dom";
import "./index.css";
import React from "react";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaYoutube, FaFileExport, FaQuestionCircle, FaNeos } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
      { label: " ", icon: <FaNeos className="icon-style" />},
      { label: "Account",   icon: <FaRegUserCircle className="icon-style" />  },
      { label: "Dashboard", icon: <FaTachometerAlt className="icon-style" />  },
      { label: "Courses",   icon: <FaBook className="icon-style" />           },
      { label: "Calendar",  icon: <FaRegCalendarAlt className="icon-style" /> },
      { label:"Inbox",      icon: <FaInbox className="icon-style" />},
      { label:"History",   icon: <FaClock className="icon-style" />},
      {label:"Studio",     icon: <FaYoutube className="icon-style" />},
      {label:"Commons",   icon: <FaFileExport className="icon-style" />},
      {label:"Help",      icon: <FaQuestionCircle className="icon-style" />},
    ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} 
          <br />
          {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;