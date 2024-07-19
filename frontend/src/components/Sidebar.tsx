import { useState, useRef, useEffect } from "react";
import SidebarButton from "@/components/Button/SidebarButton";
import { Transition } from "@headlessui/react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => setIsOpen(!isOpen);
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
          className="fixed right-0 top-0 h-full w-64 bg-white p-4 shadow-lg"
        >
          <nav>
            <ul>
              <li>
                <a href="#home" className="block px-4 py-2 hover:bg-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block px-4 py-2 hover:bg-gray-200">
                  my page
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  test
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </>
  );
};

export default Sidebar;
