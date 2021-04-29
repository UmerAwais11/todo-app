exports.homeRoutes = (req, res) => {
  console.log("LOGIN CREDENTIALS: ", req.session.user);

  if (!req.session.user) {
    res.render("login");
    //return res.status(401).send();
  } else {
    // Make a get request to /api/todos
    axios
      .get("http://localhost:3000/api/todos")
      .then(function (response) {
        res.render("index", { todos: response.data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

exports.add_todotask = (req, res) => {
  res.render("add_todotask");
};

exports.update_todotask = (req, res) => {
  axios
    .get("http://localhost:3000/api/todos", { params: { id: req.query.id } })
    .then(function (tododata) {
      res.render("update_todotask", { todo: tododata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
