function ValidateEmail(email) {
  // console.log(email)
  const regex = new RegExp(/^([\w\.\-]+)@([\w\.\-]+)((.(\w){2,4})+)$/);
  return regex.test(email);
}

module.exports.ValidateEmail = ValidateEmail;
