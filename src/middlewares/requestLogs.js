function logs(req, res, next) {
  console.log(`${req.url} ${req.method}`);
  next();
}

module.exports = logs;
