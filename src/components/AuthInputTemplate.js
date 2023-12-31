import React from "react";

// Provide a template for all auth-related form input fields
const AuthInputTemplate = (props) => {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    min = null,
    max = null,
    pattern = null,
    maxLength = null,
  } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="rounded-sm px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={min}
      max={max}
      pattern={pattern}
      maxLength={maxLength}
    />
  );
};

export default AuthInputTemplate;
