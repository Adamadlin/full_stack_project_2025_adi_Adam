// node_backend/index.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const animalsRoutes = require("./routes/animals");

// const app = express();
// app.use(bodyParser.json());
// app.use("/animals", animalsRoutes);

// app.listen(3000, () => {
//   console.log("🚀 Server running at http://localhost:3000");
// });


// node_backend/index.js
// require("dotenv").config();


require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const animalsRoutes = require("./routes/animals");

const app = express();

// Middleware
app.use(cors());                // Allow cross-origin requests
app.use(morgan("dev"));         // Log HTTP requests
app.use(bodyParser.json());     // Parse JSON request bodies

// Routes
app.use("/animals", animalsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});