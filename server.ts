//const app = require("./HTTP/Bootstrap/app");
import app from "./HTTP/Bootstrap/app";
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
