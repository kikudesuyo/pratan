import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import SidebarButton from "@/components/Button/SidebarButton";
import { PATHS } from "@/utils/constants/Paths";
import TestIcon from "@/assets/icon/TestIcon";
import SignOutIcon from "@/assets/icon/SignoutIcon";
import HomeIcon from "@/assets/icon/HomeIcon";
import CrossIcon from "@/assets/icon/crrossIcon";
import GitHubIcon from "@/assets/icon/GitHubIcon";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
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
      background: "#fb923c",
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
      <div
        onClick={closeMenu}
        className={`pointer-events-auto fixed inset-x-0 top-0 z-20 bg-black opacity-25 ${
          isOpen ? "block" : "hidden"
        } `}
        style={{ height: "100vh" }}
      />
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
        <div className=" flex flex-col justify-between">
          <button
            onClick={closeMenu}
            className="absolute right-0 top-0 p-2 text-white hover:text-gray-300"
          >
            <CrossIcon size="size-12" />
          </button>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-8">
            <NavLink
              className="block border-b py-2 text-white hover:text-gray-300"
              to={PATHS.WORDLIST}
              onClick={closeMenu}
            >
              <div className="flex items-center gap-2">
                <HomeIcon size="size-6" />
                <span className="">Home</span>
              </div>
            </NavLink>
            <NavLink
              className="block border-b py-2 text-white hover:text-gray-300"
              to={PATHS.WORDTEST}
              onClick={closeMenu}
            >
              <div className="flex items-center gap-2">
                <TestIcon size="size-6" />
                <span>Test</span>
              </div>
            </NavLink>
            <NavLink
              className="block flex-1 border-b py-2 text-white hover:text-gray-300"
              to={PATHS.LANDING}
              onClick={closeMenu}
            >
              <div className="flex items-center gap-2">
                <SignOutIcon size="size-6" />
                <span>Signout</span>
              </div>
            </NavLink>
            <div className="flex flex-1 items-center gap-2 border-b py-2 text-white hover:text-gray-300">
              <GitHubIcon size="size-6" />
              <a href="https://github.com/kikudesuyo/pratan">github</a>
            </div>
          </div>
        </div>
      </Menu>
      <SidebarButton func={toggleMenu} />
    </>
  );
};

export default Sidebar;
