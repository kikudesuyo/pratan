import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarButton from "@/components/Button/SidebarButton";
import { Transition } from "@headlessui/react";
import { PATHS } from "@/utils/constants/Paths";
import LoginLogo from "@/assets/logo/LoginLogo";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => setIsOpen(!isOpen);
  console.log(isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <SidebarButton func={toggleSidebar} />
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <div
          ref={sidebarRef}
          className="fixed right-0 top-0 h-full w-72 bg-gray-100 bg-gradient-to-b p-6 shadow-xl"
        >
          <nav className="flex h-full flex-col justify-between">
            <ul className="space-y-6">
              <li>
                <Link
                  to={PATHS.WORDLIST}
                  className="flex items-center transition-colors duration-200"
                >
                  <LoginLogo />
                  <span className="text-lg font-semibold">Home</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </>
  );
};

export default Sidebar;
