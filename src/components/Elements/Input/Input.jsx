import { useState } from "react";

const Input = (props) => {
  // destructuring
  const { type, placeholder, name, variants } = props;
  const [showPassword, setShowPassword] = useState(false);

  // handle toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword && type === "password" ? "text" : type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`block w-full rounded-md border-0 ${variants} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 focus:outline-none`}
      />
      {type === "password" && (
        <i
          className={`fas ${
            showPassword ? "fa-eye-slash" : "fa-eye"
          } absolute right-3 top-3 text-gray-500 cursor-pointer`}
          onClick={handleTogglePassword}
        ></i>
      )}
    </div>
  );
};

export default Input;
