import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBellConcierge,
  faCircleInfo,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useStore from "../Zustand/Store";
import MessageDialog from "./MessageDialog";
import HistoryDialog from "./HistoryDialog";
import CallDialog from "./CallDialog";

const BottomNav = () => {
  const navigate = useNavigate();
  const [openMessageDialog, setOpenMessageDialog] = useState(false);
  const [openHistoryDialog, setOpenHistoryDialog] = useState(false);
  const [openCallDialog, setOpenCallDialog] = useState(false);
  const location = useLocation();
  const { filterClicked, navButtons, setNavbuttons } = useStore(); 
  const navButtonsRef = useRef(null); 
  // const [navButtons, setNavbuttons] = useState(false);

  const getActiveIcon = () => {
    if (location.pathname === "/search") return "search";
    if (location.pathname === "/cart") return "cart";
    if (location.pathname === "/details") return "details";
    return "hompage";
  };

  const activeIcon = getActiveIcon();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navButtons && navButtonsRef.current && !navButtonsRef.current.contains(event.target)) {
        setNavbuttons(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navButtons]);

  return (
    <div>
      <MessageDialog setOpen={setOpenMessageDialog} open={openMessageDialog} />
      <HistoryDialog setOpen={setOpenHistoryDialog} open={openHistoryDialog} />
      <CallDialog setOpen={setOpenCallDialog} open={openCallDialog} />

      <div className={`fixed  z-10 navigation bottom-0 h-16 left-0 right-0 p-4 bg-[url('/images/navbar-custom.png')]`}>
        <nav className={`navbar z-50 ${navButtons ? "open" : ""}`} ref={navButtonsRef}>
          <div className="nav-cont">
            <div
              className={`bill shadow-lg z-10 ${navButtons ? "bg-white" : "bg-red-500"}`}
              onClick={() => setNavbuttons(!navButtons)}
            >
              <i>
                {!navButtons ? (
                  <FontAwesomeIcon icon={faBellConcierge} className="text-2xl text-white" />
                ) : (
                  <img src="images/cross.svg" alt="Close" />
                )}
              </i>
            </div>

            <span style={{ "--i": 1 }}>
              <div className="a">
                <img
                  src="images/call.svg"
                  alt="Call"
                  onClick={() => setOpenCallDialog(true)}
                />
              </div>
            </span>

            <span style={{ "--i": 2 }}>
              <div className="a">
                <img
                  src="images/message.svg"
                  alt="Message"
                  onClick={() => setOpenMessageDialog(true)}
                />
              </div>
            </span>

            <span style={{ "--i": 3 }}>
              <div className="a">
                <img
                  src="images/history.svg"
                  alt="History"
                  onClick={() => setOpenHistoryDialog(true)}
                />
              </div>
            </span>
          </div>
        </nav>

        <div className="fixed bottom-2 z-10 left-0 right-0 flex justify-around items-center">
          <div className="flex flex-col  gap-1 items-center" onClick={() => navigate("/hompage")}>
            <img
              src={`images/${activeIcon === "hompage" ? "hac" : "h1"}.svg`}
              alt="Home"
              className={`w-6 h-6 ${activeIcon === "hompage" ? "text-red-500" : "text-gray-400"}`}
            />
            <span className={`text-sm font-bold ${activeIcon === "hompage" ? "text-red-500" : "text-gray-400"}`}>
              Home
            </span>
          </div>
          <div className="flex flex-col  gap-1 items-center" onClick={() => navigate("/search")}>
            <img
              src={`images/${activeIcon === "search" ? "searchacv" : "s2"}.svg`}
              alt="Search"
              className={`w-6 h-6 ${activeIcon === "search" ? "text-red-500" : "text-gray-400"}`}
            />
            <span className={`text-sm font-bold ${activeIcon === "search" ? "text-red-500" : "text-gray-400"}`}>
              Search
            </span>
          </div>
          <div className="flex flex-col w-8" ></div>
          <div className="flex flex-col  gap-1 items-center" onClick={() => navigate("/cart")}>
            <img
              src={`images/${activeIcon === "cart" ? "shopacv" : "shopping2"}.svg`}
              alt="Cart"
              className={`w-6 h-6 ${activeIcon === "cart" ? "text-red-500" : "text-gray-400"}`}
            />
            <span className={`text-sm font-bold ${activeIcon === "cart" ? "text-red-500" : "text-gray-400"}`}>
              Cart
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center" onClick={() => navigate("/details")}>
            <img
              src={`images/${activeIcon === "details" ? "iac" : "info2"}.svg`}
              alt="Info"
              className={`w-6 h-6 ${activeIcon === "details" ? "text-red-500" : "text-gray-400"}`}
            />
            <span className={`text-sm font-bold ${activeIcon === "details" ? "text-red-500" : "text-gray-400"}`}>
              Info
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
