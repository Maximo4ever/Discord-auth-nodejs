const app = require("./app");
const { PORT } = require("./config");
require("./db");
require("./config");

app.listen(PORT);
console.log("Server is running in port", PORT);
