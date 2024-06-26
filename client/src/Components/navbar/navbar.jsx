import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo, logout, profile } from "../../assets";
import { useState } from "react";
import { Icon } from "../";
import { useStateContext } from "../../context";

function NavLink({ name, path, isLinkActive, disabled }) {
  return (
    <Link
      className={`nav-link ${isLinkActive(path) ? "nav-active" : ""} 
      ${disabled && "disabled"}`}
      to={path}
    >
      {name}
    </Link>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path;
  const { connect, address } = useStateContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <Icon imgUrl={logo} name={"dashboard"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse custom-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <NavLink name="Home" path="/" isLinkActive={isLinkActive} />
            <NavLink
              name="Campaigns"
              path="/campaign"
              isLinkActive={isLinkActive}
            />
            {/* <NavLink
              name="Payment"
              path="/payment"
              disabled={true}
              isLinkActive={isLinkActive}
            />
            <NavLink
              name="Withdraw"
              path="/withdraw"
              disabled={true}
              isLinkActive={isLinkActive}
            /> */}
          </div>
          <div className="navbar-nav ms-auto">
            <div className="py-0 my-0 nav-btn-div">
              <button
                type="button"
                className={`btn ${
                  address == undefined
                    ? "btn-primary nav-btn"
                    : "btn-outline-primary nav-btn-add"
                } `}
                onClick={() => {
                  if (address != undefined) {
                    navigate("/create-campaign");
                  } else connect();
                }}
              >
                {address != undefined ? "Create a campaign" : "Connect"}
              </button>
            </div>
            <Link to="/profile">
              <Icon
                imgUrl={profile}
                name={"profile"}
                isActive={location.pathname.split("/").pop()}
              />
            </Link>
            <Link to="/">
              <Icon imgUrl={logout} name={"logout"} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
