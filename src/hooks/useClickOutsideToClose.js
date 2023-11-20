import { useEffect } from "react";

// Closes open panels/menus upon clicking outside
// Accepts the panel/menu ref and the function to set open/show/appear states to false
const useClickOutsideToClose = (domNodeRef, falseSetterCloseMenu) => {
  useEffect(() => {
    const closeHandler = (event) => {
      if (!domNodeRef.current?.contains(event.target)) {
        falseSetterCloseMenu();
      }
    };
    document.addEventListener("mousedown", closeHandler);

    // remove the mousedown event once the component has mounted and the close event triggered
    return () => document.removeEventListener("mousedown", closeHandler);
  }, []);

  return domNodeRef;
};

export default useClickOutsideToClose;
