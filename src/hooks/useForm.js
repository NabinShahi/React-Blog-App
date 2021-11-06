import { useEffect, useState } from "react";

function useForm(callback, validateLogin) {
  const [values, setValues] = useState({});

  const [errorValue, setErrorValue] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorValue(validateLogin(values));
    setIsSubmitting(true);
    event.target.reset();
  };

  useEffect(() => {
    if (Object.keys(errorValue).length === 0 && isSubmitting) {
      callback();
    }
  }, [errorValue, callback, isSubmitting]);

  console.log(values)

  return {
    handleChange,
    handleSubmit,
    values,
    errorValue,
  };
}

export default useForm;
