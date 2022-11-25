const app = require("./app");
const connectDB = require("./database");
connectDB()

// starting the server
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
