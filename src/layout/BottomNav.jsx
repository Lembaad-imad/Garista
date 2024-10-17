import React, { useState } from "react";
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
  const { filterClicked } = useStore();
  const getActiveIcon = () => {
    if (location.pathname === "/search") return "search";
    if (location.pathname === "/cart") return "cart";
    if (location.pathname === "/details") return "details";
    return "hompage";
  };
  const [navButtons, setNavbuttons] = useState(false);

  const activeIcon = getActiveIcon();

  return (
    <div>
      <MessageDialog setOpen={setOpenMessageDialog} open={openMessageDialog} />
      <HistoryDialog setOpen={setOpenHistoryDialog} open={openHistoryDialog} />
      <CallDialog setOpen={setOpenCallDialog} open={openCallDialog} />

      {/* {navButtons && (
        <div className="z-10 w-full fixed bottom-20 flex flex-col justify-center items-center self-center">
          <div className="fixed bottom-32">
            <img
              src="images/message.svg"
              alt="Message"
              onClick={() => setOpenMessageDialog(true)}
            />
          </div>
          <div className="self-start fixed bottom-20 left-32">
            <img
              src="images/history.svg"
              alt="History"
              onClick={() => setOpenHistoryDialog(true)}
            />
          </div>
          <div className="self-end fixed bottom-20 right-32">
            <img
              src="images/call.svg"
              alt="Call"
              onClick={() => setOpenCallDialog(true)}
            />
          </div>
        </div>
      )} */}

      <div
        className={`fixed navigation z-100  bottom-0 h-16 left-0 right-0 p-4 `}
      >
     <nav className={`navbar ${navButtons ? "open" : ""}`}>
  <div className="nav-cont">
    <div
      className={`bill shadow-lg z-100 ${navButtons ? "bg-white" : "bg-red-500"}`}
      onClick={() => setNavbuttons(!navButtons)}
    >
      <i>
        {!navButtons ? (
          <FontAwesomeIcon
            icon={faBellConcierge}
            className="text-2xl text-white "
          />
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
          src="images/history.svg"
          alt="History"
          onClick={() => setOpenHistoryDialog(true)}
        />
      </div>
    </span>

    <span style={{ "--i": 3 }}>
      <div className="a">
        <img
          src="images/message.svg"
          alt="Message"
          onClick={() => setOpenMessageDialog(true)}
        />
      </div>
    </span>
  </div>
</nav>

        <div className="fixed bottom-3 z-10 left-0 right-0 flex justify-around items-center">
          <div
            className="flex flex-col items-center"
            onClick={() => navigate("/hompage")}
          >
            <img
              src={`images/${activeIcon === "hompage" ? "hac" : "h1"}.svg`}
              alt="Home"
              className={`w-6 h-6 ${
                activeIcon === "hompage" ? " text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs text-bold ${
                activeIcon === "hompage" ? "text-red-500" : "text-gray-400"
              }`}
            >
              Home
            </span>
          </div>
          <div
            className="flex flex-col mr-8"
            onClick={() => navigate("/search")}
          >
            <img
              src={`images/${activeIcon === "search" ? "searchacv" : "s2"}.svg`}
              alt="Search"
              className={`w-6  h-6 ${
                activeIcon === "search" ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs text-bold    ${
                activeIcon === "search" ? "text-red-500" : "text-gray-400"
              }`}
            >
              Search
            </span>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => navigate("/cart")}
          >
            <img
              src={`images/${
                activeIcon === "cart" ? "shopacv" : "shopping2"
              }.svg`}
              alt="Cart"
              className={`w-6 h-6 ${
                activeIcon === "cart" ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs text-bold ${
                activeIcon === "cart" ? "text-red-500" : "text-gray-400"
              }`}
            >
              Cart
            </span>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => navigate("/details")}
          >
            <img
              src={`images/${activeIcon === "details" ? "iac" : "info2"}.svg`}
              alt="Info"
              className={`w-6 h-6 ${
                activeIcon === "details" ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs text-bold ${
                activeIcon === "details" ? "text-red-500" : "text-gray-400"
              }`}
            >
              Info
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
