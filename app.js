// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
const cors = require("cors");
// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();
app.use(
    cors({
      // Add the URLs of allowed origins to this array
      origin: ['https://ecommerce-tech-app.netlify.app','http://localhost:5173']
    })
  );
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);


app.use("/api",require("./routes/product.routes"))
app.use("/api",require("./routes/user.routes"))
app.use("/api",require("./routes/category.routes"))
app.use("/api",require("./routes/order.routes"))
app.use("/auth", require("./routes/auth.routes"));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
