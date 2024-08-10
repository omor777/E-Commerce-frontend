const validateMobileNumber = (mobile) => {
  const regex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
  return regex.test(mobile);
};

export default validateMobileNumber;
