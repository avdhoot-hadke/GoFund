import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun } from "../../assets";
import { navlinks } from "../../constants";
import { useState } from "react";
import { Icon } from "../";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="sidebar-comp ">
      <Link to="/">
        <Icon imgUrl={logo} name={"dashboard"} />
      </Link>

      <div className="sb-div">
        <div className="links-div">
          {navlinks.map((link) => (
            <Link to={link.link}>
              <Icon
                {...link}
                key={link.name}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
