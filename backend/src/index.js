require("dotenv").config();

// Imports
const app = require("./app");
require("./database");

// Server set
async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

// Server start
main();
