import React from "react";
import { NavLink } from "react-router-dom";

const ActiveHeaderLink = ({
  toWhere,
  inactiveGroupStyle,
  icon,
  linkTitle,
  iconStyle,
  linkTitleStyle,
  optionalMenuSetter = null,
}) => {
  // closes the ham menu on link visit
  const closeMenu = () => {
    if (optionalMenuSetter) {
      optionalMenuSetter(false);
    }
  };

  return (
    <NavLink
      to={`/${toWhere}`}
      className={({ isActive }) =>
        isActive
          ? `${inactiveGroupStyle} text-ctaColor`
          : `${inactiveGroupStyle}`
      }
      onClick={closeMenu}
    >
      <span className={`${iconStyle}`}>{icon}</span>
      <span className={`${linkTitleStyle}`}>{`${linkTitle}`}</span>
    </NavLink>
  );
};

export default ActiveHeaderLink;
