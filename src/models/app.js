const usersQuery = require('../../queries/app')

const getAllUsers = () => {
  users = usersQuery.getAllUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retreiving users', status: 404 }
      : result
  })
}

module.exports = {
  getAllUsers
}  