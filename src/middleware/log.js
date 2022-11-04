const httpRequestResponseLog = (req, res, next) => {
  console.log('<<-- res -->>', req);
  // res.on('finish', () => {
  // });
};

module.exports = httpRequestResponseLog;
