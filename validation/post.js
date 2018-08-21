const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  console.log("post data", data);
  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Post text is required";
  } else if (!Validator.isLength(data.text, { min: 30, max: 300 })) {
    errors.text = "Post needs to be between 30 and 300 in length";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
