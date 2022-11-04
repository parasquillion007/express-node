const httpRequestResponseLog = (req, res, next) => {
  const startHrTime = process.hrtime();
  console.log('startHrTime-->', startHrTime);

  const responseHeaders = res.getHeaders();
  // console.log('Response Headers-->', responseHeaders);
  const elapsedHrTime = process.hrtime(startHrTime);
  const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
  console.log('Final Response-->', req.path, elapsedTimeInMs);

  // res.on('finish', () => {
  //   const responseHeaders = res.getHeaders();
  //   console.log('Response Headers-->', responseHeaders);
  //   const elapsedHrTime = process.hrtime(startHrTime);
  //   const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
  //   console.log('Final Response-->', req.path, elapsedTimeInMs);
  // });
};

module.exports = httpRequestResponseLog;
