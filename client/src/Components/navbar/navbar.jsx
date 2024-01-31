import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logo, menu, search, thirdweb } from "../../assets";
import { navlinks } from "../../constants";
import { useState } from "react";
import { Icon } from "../";

import React from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return <div className="navbar-comp">nav</div>;
}
