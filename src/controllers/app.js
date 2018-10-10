// In Express, your "controllers" are the functions you pass as the route handlers:

// router.get("/people", function(req, res, next) {
//   req.query         // <-- get querystring values such as ?foo=bar
//   req.params        // <-- get path params such as the "34" in /posts/34/comments
//   req.body          // <-- get either the json that was posted, or the form values

//   res.render(...)   // <-- render a template
//   res.json(...)     // <-- render a JSON response
//}

// Controllers typically:

// Access data from the request
// Coordinate with other parts of the app (such as models, external services etc...)
// Instruct the framework on how to generate a response

const model = require('../models/app')

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}
//T
module.exports = {
  getAllUsers
}