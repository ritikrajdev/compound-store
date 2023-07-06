class CompoundError extends Error {
  constructor(message) {
    super(message);
  }
}

class NotFoundError extends CompoundError {
  constructor(message) {
    super(message);
  }
}

class HttpError extends CompoundError {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

module.exports = {
  CompoundError,
  NotFoundError,
  HttpError,
};