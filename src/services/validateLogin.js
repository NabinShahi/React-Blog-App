const validateLogin = (values) => {
  console.log(values.username)
  let errors = {};

  const re = /\S+@\S+\.\S+/;

  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!re.test(values.email)) {
    errors.email = "Email address is invalid.";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!(values.password.length > 10)) {
    errors.password = "Password should be more than 10 characters.";
  }

  if (!(values.password === values.confirmPassword)) {
    errors.confirmPassword = "Password does not match";
  }

  return errors;
};

export default validateLogin;
