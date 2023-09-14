import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import useClickOutsideToClose from "./ClickOutsideToClose";

const DropdownMenu = ({ title, items, titleStyle, itemsStyle }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close the drop down menu upon clicking outside
  useClickOutsideToClose(dropdownRef, () => setOpenDropdown(false));

  return (
    <div ref={dropdownRef} className="flex flex-col space-y-[0.25rem] group">
      <span
        onClick={(e) => setOpenDropdown(openDropdown ? false : true)}
        className="flex space-x-1 items-center"
      >
        <span className={titleStyle}>{title}</span>
        <span className="group-hover:text-ctaColor">
          {openDropdown ? <PiCaretUp /> : <PiCaretDown />}
        </span>
      </span>
      {openDropdown && (
        <div className={itemsStyle}>
          {items.map((item, index) => {
            return (
              <Link
                to={`${item.params}`}
                key={index}
                onClick={(e) => setOpenDropdown(false)}
                className="capitalize w-full px-[1.5rem] py-[0.6rem] hover:bg-lightGrayCTA hover:text-lightThemeColor"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
