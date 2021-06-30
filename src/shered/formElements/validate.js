const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "email",
    "password",
    "address",
    "price",
    "usableArea",
    "announcementURL",
    "contactName",
    "contactTel",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (values.password && values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  // eslint-disable-next-line
  if (values.contactTel && !values.contactCell.match(/^[0-9\+\s-]{8,13}$/)) {
    errors.contactCell = "Invalid cell phone number";
  }
  if (
    values.contactEmail &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)
  ) {
    errors.contactEmail = "Invalid email address";
  }
  return errors;
};
export default validate;
