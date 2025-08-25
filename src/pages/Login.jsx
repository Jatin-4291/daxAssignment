import { useState } from "react";
import InputField from "../components/InputFeild";
import SubmitButton from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { validateUsername, validatePassword } from "../utils/validate";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("click");

    const newErrors = {};
    if (!validateUsername(form.username))
      newErrors.username = "Username must have alphabets, '-'& number";
    if (!validatePassword(form.password, form.username))
      newErrors.password =
        "Password format invalid.Password can only contain lettersnumbers, and special characters . _ @ -";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!", form);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white gap-4">
      <Header heading="Login" isLogin={true} />
      <div className="flex flex-col items-center mt-14  h-4/5">
        <div className="grid grid-cols-1 gap-10 w-full w-1/4 h-2/5 justify-center">
          <InputField
            placeholder="USERNAME"
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            error={errors.username}
          />
          <InputField
            placeholder="NEW PASSWORD"
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={errors.password}
          />
        </div>
        <div className="mt-20 w-4/5 flex justify-center">
          <SubmitButton label="Login" onClick={handleSubmit} />
        </div>
        <p>
          don't have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className="text-teal-700 cursor-pointer mt-2"
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}
