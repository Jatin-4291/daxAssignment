import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export default function InputField({
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  return (
    <div className="w-full">
      <input
        type={isPasswordField && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-b py-4 text-sm placeholder-gray-500 focus:outline-none 
  ${
    error
      ? "border-red-500 focus:border-red-500"
      : "border-gray-300 focus:border-teal-700"
  } 
  focus:border-b-2 focus:bg-gray-100`}
      />
      {isPasswordField && (
        <span
          className="absolute mt-4 mr-4 cursor-pointer text-gray-500"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
