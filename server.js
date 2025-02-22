const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

// Serve static files (your game)
app.use(express.static(path.join(__dirname, "public")));

// Default route to serve a.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main_page.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});