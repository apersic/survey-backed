const statusCodes = require("./statusCodes");
const BaseError = require("./baseError");

class Api500Error extends BaseError {
  constructor(
    errors,
    statusCode = statusCodes.INTERNAL_SERVER_ERROR,
    description = "Internal server error.",
    isOperational = true,
  ) {
    super(statusCode, isOperational, description);
    this.errors = errors;
  }
}

module.exports = Api500Error;
