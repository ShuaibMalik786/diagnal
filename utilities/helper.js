send = (res, code, data, msg = "") => {
  let response = {
    error: {},
  };
  if (code >= 400 && code < 600) {
    data = "";
    response.success = false;
  }
  response.error.code = code;
  response.error.message = msg;
  response.result = data;
  response.success = true;

  res.status(response.error.code).json(response);
};

module.exports = {
  send,
};
