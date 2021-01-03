export function printRequest(req, res, next) {
  console.log("middleware function");
  console.log(req.body);

  return next();
}
