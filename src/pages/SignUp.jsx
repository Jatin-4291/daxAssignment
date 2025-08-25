import { useState } from "react";
import InputField from "../components/InputFeild";
import SubmitButton from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validatePhone,
} from "../utils/validate";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("click");

    const newErrors = {};
    if (!validateName(form.name)) newErrors.name = "Only alphabets allowed.";
    if (!validateUsername(form.username))
      newErrors.username = "Username must have alphabets, '-'& number";
    if (!validatePassword(form.password, form.username))
      newErrors.password =
        "Password format invalid.Password can only contain lettersnumbers, and special characters . _ @ -";
    if (!validateConfirmPassword(form.password, form.confirmPassword))
      newErrors.confirmPassword = "Passwords do not match.";
    if (!validateEmail(form.email)) newErrors.email = "Invalid Gmail format.";
    if (!validatePhone(form.phone)) newErrors.phone = "Invalid phone number.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!", form);
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white gap-4">
      <Header heading="Create New Account" isLogin={false} />
      <div className="flex flex-col items-center mt-14  h-4/5">
        <div className="grid grid-cols-2 gap-10 w-full w-4/5 h-3/5 justify-center">
          <InputField
            placeholder="NAME"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
          <InputField
            placeholder="USERNAME"
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            error={errors.username}
          />
          <InputField
            placeholder="EMAIL"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />
          <InputField
            placeholder="PHONE NO."
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={errors.phone}
          />
          <InputField
            placeholder="NEW PASSWORD"
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={errors.password}
          />
          <InputField
            placeholder="CONFIRM NEW PASSWORD"
            type="password"
            value={form.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            error={errors.confirmPassword}
          />
        </div>
        <div className="mt-20 w-full flex justify-end pr-[10%]">
          <SubmitButton label="SIGN UP" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
