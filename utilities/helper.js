send = (res, code, data, msg = "") => {
  let result = {
    error: {},
  };
  if (code >= 400 && code < 600) {
    data = "";
  }
  result.error.code = code;
  result.error.message = msg;
  result.result = data;
  res.status(result.error.code).json(result);
};

module.exports = {
  send,
};
