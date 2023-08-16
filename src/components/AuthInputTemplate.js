import React from "react";

const AuthInputTemplate = (props) => {
  const { type, name, placeholder, value, onChange, onBlur } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="hover:outline-none focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default AuthInputTemplate;
// set outline none for inputs in the css file, on focus and hover and set borders
