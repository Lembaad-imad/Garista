import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBellConcierge, faCircleInfo, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useStore from '../Zustand/Store';
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
    if (location.pathname === '/search') return 'search';
    if (location.pathname === '/cart') return 'cart';
    return 'homepage';
  };
  const [navButtons, setNavbuttons] = useState(false);

  const activeIcon = getActiveIcon();

  return (
    <div>
       <MessageDialog setOpen={setOpenMessageDialog} open={openMessageDialog} />
      <HistoryDialog setOpen={setOpenHistoryDialog} open={openHistoryDialog} />
      <CallDialog setOpen={setOpenCallDialog} open={openCallDialog} />

      {navButtons && (
        <div className="z-10 w-full fixed bottom-20 flex flex-col justify-center items-center self-center">
          <div className="fixed bottom-32">
            <img src="images/message.svg" alt="Message" onClick={() => setOpenMessageDialog(true)} />
          </div>
          <div className="self-start fixed bottom-20 left-32">
            <img src="images/history.svg" alt="History" onClick={() => setOpenHistoryDialog(true)} />
          </div>
          <div className="self-end fixed bottom-20 right-32">
            <img src="images/call.svg" alt="Call" onClick={() => setOpenCallDialog(true)} />
          </div>
        </div>
      )}

      <div className={`fixed navigation bottom-0 left-0 right-0 p-4 shadow-md${filterClicked ? '' : "z-100"}`}>
        <div className="menu w-full h-24 flex justify-center items-center">
          <div className={`bill ${navButtons ? "bg-white" : "bg-red-500"}`}
            onClick={() => setNavbuttons(!navButtons)}>
            <i></i>
            {
              !navButtons ? <FontAwesomeIcon icon={faBellConcierge} className="text-2xl text-white" /> : <p className="">X</p>
            }
          </div>
        </div>

        <div className="fixed bottom-3 z-10 left-0 right-0 flex justify-around items-center">
          <div className="flex flex-col items-center" onClick={() => navigate('/homepage')}>
            <FontAwesomeIcon icon={faHouse} className={`text-2xl ${activeIcon === 'homepage' ? 'text-red-500' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeIcon === 'homepage' ? 'text-red-500' : 'text-gray-400'}`}>Home</span>
          </div>
          <div className="flex flex-col mr-5" onClick={() => navigate('/search')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={`text-2xl search ${activeIcon === 'search' ? 'text-red-500' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeIcon === 'search' ? 'text-red-500' : 'text-gray-400'}`}>Search</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => navigate('/cart')}>
            <FontAwesomeIcon icon={faBagShopping} className={`text-2xl cart ${activeIcon === 'cart' ? 'text-red-500' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeIcon === 'cart' ? 'text-red-500' : 'text-gray-400'}`}>Cart</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => navigate('/info')}>
            <FontAwesomeIcon icon={faCircleInfo} className={`text-2xl ${activeIcon === 'info' ? 'text-red-500' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeIcon === 'info' ? 'text-red-500' : 'text-gray-400'}`}>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
