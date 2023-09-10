const express = require("express");
const router = express.Router();
const db = require("./backend/Sqlite").db;

// Define your routes here

router.get("/api/data", (req, res) => {
  res.status(200).send({ message: "GET request received" });
});

router.post("/api/data", (req, res) => {
  res.json({ message: "POST request received" });
});

router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
//   console.log("received username", username);
//   console.log("received password", password);
  // Use db.get to execute a single query
  db.get(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        console.error("Error executing query:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else if (!row) {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      } else {
        res.json({ success: true, username: row.username });
      }
    }
  );
});

router.get("/tahir", (req, res) => {
  res.status(200).send({ Hey: "This is Usman Tahir" });
});

module.exports = router;
