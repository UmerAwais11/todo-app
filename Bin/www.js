const app = require("../HTTP/Bootstrap/app");
app.listen(process.env, () => {
  console.log(`Server is running on http://localhost:${process.env}`);
});
