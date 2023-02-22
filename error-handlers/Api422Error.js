const statusCodes = require("./statusCodes");
const BaseError = require("./baseError");

class Api422Error extends BaseError {
  constructor(
    errors,
    statusCode = statusCodes.UNPROCESSABLE_ENTITY,
    description = "Unprocessable entity.",
    isOperational = true
  ) {
    super(statusCode, isOperational, description);
    this.errors = errors;
  }
}

module.exports = Api422Error;
