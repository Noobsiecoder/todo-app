import React from "react";

interface InputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputValue, setInputValue }: InputProps): JSX.Element => {
  return (
    <input
      onChange={(event) => setInputValue(event.target.value)}
      className="w-full px-3 py-4 leading-tight border appearance-none bg-gray-50 focus:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-montserrat text-gray-750"
      type="text"
      name="tasks"
      value={inputValue}
      placeholder="Add details"
      required
    />
  );
};

export default Input;
