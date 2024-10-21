import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import EachUtils from "../../../utils/EachUtils";
import DropdownItemList from "./DropdownItemList";
import { useLocation } from "react-router-dom";

const Dropdown = (props) => {
  const { label, items, variants, variantsList, isMobile } = props;
  const location = useLocation(); // Get current route path
  const [isOpen, setIsOpen] = useState(false);

  // Open dropdown by default on the landing page ("/")
  useEffect(() => {
    if (location.pathname === "/" && !isMobile) {
      setIsOpen(true);
    }
  }, [location.pathname, isMobile]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center ${variants} text-white py-3 px-4 rounded-t cursor-pointer `}
        onClick={handleToggleDropdown}
      >
        <span className="mr-2">{label}</span>
        <Icon iconClass={`fas fa-caret-${isOpen ? "up" : "down"}`} />
      </div>
      <ul
        className={`absolute border border-gray-300 w-full rounded-b overflow-hidden transition-all duration-300 ease-in-out z-30 ${
          isOpen ? "min-h-64 opacity-100" : "max-h-0 opacity-0"
        } `}
      >
        <EachUtils
          datalist={items}
          render={(item) => (
            <DropdownItemList
              label={item}
              onClick={handleToggleDropdown}
              vatiants={variantsList}
            />
          )}
        />
      </ul>
    </div>
  );
};

export default Dropdown;
