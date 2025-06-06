const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route that returns Hello World in H1 tag
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
