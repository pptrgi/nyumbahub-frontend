import { useState, useEffect, useRef } from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import { Link } from "react-router-dom";

const DropdownMenu = ({ title, items, titleStyle, itemsStyle }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const outsideClickListener = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", outsideClickListener);
    return () => {
      // investigate
      document.removeEventListener("mousedown", outsideClickListener);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="flex flex-col space-y-[0.25rem]">
      <span
        onClick={(e) => setOpenDropdown(openDropdown ? false : true)}
        className="flex space-x-1 items-center"
      >
        <span className={titleStyle}>{title}</span>
        <span className="font-semibolded">
          {openDropdown ? <PiCaretUp /> : <PiCaretDown />}
        </span>
      </span>
      {openDropdown && (
        <div className={itemsStyle}>
          {items.map((item, index) => {
            return (
              <span
                className="capitalize hover:bg-darkLightGrayCTA w-full px-[1.5rem] py-[0.25rem]"
                key={index}
              >
                <Link
                  to={`${item.params}`}
                  onClick={(e) => setOpenDropdown(false)}
                >
                  {item.name}
                </Link>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
