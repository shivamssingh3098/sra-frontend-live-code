import React, { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/css/Home.css";
import logo from "../images/logo.png";
import serviceIcon from "../images/logo.png";
import devendraFadnavis from "../images/Shri.Devendra.jpg";
import eknathShinde from "../images/Eknath-Shinde.jpg";
import ajitPawar from "../images/ajitpawar.jpg";
import Pankaj from "../images/Pankaj.png";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const loginSectionRef = useRef(null);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  const userType = localStorage.getItem("userType");

  const scrollToLogin = () => {
    loginSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    navRef.current?.classList.toggle("nav-active");
    menuButtonRef.current?.classList.toggle("toggle");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    try {
      await fetch("/api/v1/users/logout", {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userType");
      setIsLoggedIn(false);
      setShowPopup(false);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="header-top">
          <div className="logo-section animate-fade-in">
            <img src={logo} alt="Logo" className="main-logo" />
            <div className="header-text">
              <h1>मुंबई महानगर प्रदेश झोपडपट्टी पुनर्वसन प्राधिकरण</h1>
              <div className="sub-header">
                <span>महाराष्ट्र शासन</span>
                <div className="service-text">
                  <img
                    src={serviceIcon}
                    alt="Service"
                    className="service-icon"
                  />
                  <span>आपली सेवा आपले कर्तव्य</span>
                </div>
              </div>
            </div>
          </div>
          <button className="mobile-login-btn" onClick={scrollToLogin}>
            <FaSignInAlt /> Login
          </button>
          <div className="officials animate-slide-in">
            <div className="official">
              <img
                className="ml-5"
                src={devendraFadnavis}
                alt="Shri. Devendra Fadnavis"
              />
              <p>Shri. Devendra Fadnavis</p>
              <small>Hon'ble Chief Minister</small>
            </div>
            <div className="official">
              <img
                className="ml-5"
                src={eknathShinde}
                alt="Shri. Eknath Shinde"
              />
              <p>Shri. Eknath Shinde</p>
              <small>Hon'ble Deputy Chief Minister</small>
            </div>
            <div className="official">
              <img className="ml-5" src={ajitPawar} alt="Shri Ajit Pawar" />
              <p>Shri Ajit Pawar</p>
              <small>Hon'ble Deputy Chief Minister</small>
            </div>
            <div className="official">
              <img className="ml-5" src={Pankaj} alt="Dr. Pankaj Bhoyar" />
              <p>Dr. Pankaj Bhoyar</p>
              <small>Hon. Minister of State (Housing)</small>
            </div>
          </div>
        </div>

        <div className="nav-container">
          <button
            ref={menuButtonRef}
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <BiMenu />
          </button>

          <nav
            ref={navRef}
            className={`main-nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
          >
            <NavLink
              to={token && userType === "DEPARTMENT_MANAGER" ? "/admin" : "/"}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <AiOutlineHome className="nav-icon" /> HOME
            </NavLink>

            <NavLink
              to="/services"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <AiOutlineAppstore className="nav-icon" /> OUR SERVICES
            </NavLink>

            <NavLink
              to="/remarks"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <AiOutlineMail className="nav-icon" /> REMARK
            </NavLink>

            <NavLink
              to="/history"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <FaHistory className="nav-icon" /> HISTORY
            </NavLink>

            <NavLink
              to="/deptdas"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <MdDashboard className="nav-icon" /> DASHBOARD
            </NavLink>

            {isLoggedIn ? (
              <button
                className="logout-btn bg-red-500 p-2 rounded-md"
                onClick={() => setShowPopup(true)}
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : null}

            <div className="language-select">
              <select>
                <option>मराठी</option>
                <option>English</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      {/* Logout Confirmation Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>Are you sure you want to logout?</p>
            <div className="popup-actions">
              <button onClick={() => setShowPopup(false)}>Cancel</button>
              <button onClick={handleLogout}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
