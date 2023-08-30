import { useRef, useEffect } from "react";
const FilterPanelMobile = ({
  setPropertyType,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  setShowFilterPanel,
  setShowTypeOptions,
  showTypeOptions,
}) => {
  const filterPanelRef = useRef();

  useEffect(() => {
    const outsideClickListener = (event) => {
      if (!filterPanelRef.current.contains(event.target)) {
        setShowFilterPanel(false);
      }
    };
    document.addEventListener("mousedown", outsideClickListener);
    return () => {
      document.removeEventListener("mousedown", outsideClickListener);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-[180px] bg-white border-[1.5px] border-gray-200 pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg">
      <span className="font-poppinsRegular text-lightThemeColor mb-[0.5rem] font-semibolded">
        Filter By
      </span>
      <form ref={filterPanelRef} className="px-[0.25rem]">
        <div className="flex flex-col space-y-[1rem] font-poppinsLight text-small">
          {showTypeOptions && (
            <div>
              <span>Property type</span>
              <div className="flex flex-col space-y-[1px] px-[0.25rem]">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Apartment") & setShowFilterPanel(false)
                    }
                  />
                  <label>Apartment</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Maisonette") & setShowFilterPanel(false)
                    }
                  />
                  <label>Maisonette</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Villa") & setShowFilterPanel(false)
                    }
                  />
                  <label>Villa</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Bungalow") & setShowFilterPanel(false)
                    }
                  />
                  <label>Bungalow</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Mansion") & setShowFilterPanel(false)
                    }
                  />
                  <label>Mansion</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="propertyType"
                    onClick={(e) =>
                      setPropertyType("Bedsitter") & setShowFilterPanel(false)
                    }
                  />
                  <label>Bedsitter</label>
                </div>
              </div>
            </div>
          )}
          <div className="">
            <span>Price</span>
            <div className="flex flex-col space-y-[3px] px-[0.25rem] w-full">
              <input
                type="number"
                placeholder="min price"
                className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min={1}
                max={5e8}
              />
              <input
                type="number"
                placeholder="max price"
                className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={1}
                max={5e8}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterPanelMobile;
