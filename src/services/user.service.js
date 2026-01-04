let users = []; // temporary in-memory data

exports.createUserService = ({ name, email }) => {
  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  return newUser;
};

exports.fetchUsers = () => {
  return users;
};
