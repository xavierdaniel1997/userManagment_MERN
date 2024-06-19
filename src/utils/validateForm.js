export const validateFormRegister = (inputForm) => {
    const newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!inputForm.fname) newError.fname = "is required*";
    if (!inputForm.sname) newError.sname = "is required*";
    if (!inputForm.email) newError.email = "Email is required*";
    if (!emailRegex.test(inputForm.email)) newError.email = "Invalid email format";
    if (!inputForm.password) newError.password = "Password is required*";
    if (!passwordRegex.test(inputForm.password))
      newError.password =
        "Password must be at least 8 characters include uppercase letter, lowercase letter, one digit, and one special character";
    if (inputForm.password !== inputForm.cpassword)
      newError.cpassword = "Passwords do not match";
  
    return newError;
  };

export const validateFormSignUp = (inputForm) => {
  const newError = {};
  if(!inputForm.email) newError.email = "is required*";
  if(!inputForm.password) newError.password = "is required*";
  return newError;
}