// Name: Only alphabets allowed
export const validateName = (name) => /^[A-Za-z ]+$/.test(name);

// Username: Alphanumeric + special characters allowed
export const validateUsername = (username) =>
  /^[A-Za-z0-9._-]+$/.test(username);

// Password: Same as username but not equal to username
export const validatePassword = (password, username) => {
  if (password === username) return false;
  return /^[A-Za-z0-9._@-]+$/.test(password);
};

// Confirm Password: Must match password
export const validateConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword;

// Email: Must match Gmail format
export const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

// Phone: Country code + number
export const validatePhone = (phone) => /^\+\d{1,3}\d{7,14}$/.test(phone);
