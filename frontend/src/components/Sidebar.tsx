import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import SidebarButton from "@/components/Button/SidebarButton";
import { PATHS } from "@/utils/constants/Paths";
import TestLogo from "@/assets/logo/TestLogo";
import SignOutLogo from "@/assets/logo/Signout";
import HomeLogo from "@/assets/logo/Home";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const styles = {
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#ffaf7d",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      height: "100%",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0)",
    },
  };

  return (
    <>
      <Menu
        isOpen={isOpen}
        onStateChange={handleStateChange}
        right
        styles={styles}
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-8">
            <NavLink
              className="block border-b py-2 text-white hover:text-gray-300"
              to="/"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <HomeLogo />
                <span className="">Home</span>
              </div>
            </NavLink>
            <NavLink
              className="block border-b py-2 text-white hover:text-gray-300"
              to={PATHS.WORDDETAIL}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <TestLogo />
                <span>Test</span>
              </div>
            </NavLink>
            <NavLink
              className="block flex-1 border-b py-2 text-white hover:text-gray-300"
              to={PATHS.WORDDETAIL}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <SignOutLogo />
                <span>Signout</span>
              </div>
            </NavLink>
          </div>
        </div>
      </Menu>
      <SidebarButton func={toggleMenu} />
    </>
  );
};

export default Sidebar;
