const sqlite3 = require("sqlite3").verbose();

// Create and connect to the SQLite database
const db = new sqlite3.Database("Result.sqlite");

db.run(
  `
  CREATE TABLE IF NOT EXISTS user (
    username varchar(255) PRIMARY KEY,
    password varchar(255)
  )
`,
  (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    } else {
      console.log("Users table created or already exists");
    }
  }
);

  const data = {
    username: "admin",
    password: "admin",
  };
  db.run(
    "INSERT INTO user (username, password) VALUES (?, ?)",
    [data.username, data.password],
    (err) => {
      if (err) {
        console.error("Error creating users table:", err);
      } else {
        console.error({ message: "Admin user created" });
      }
    }
  );

module.exports = {
  db, // Export the database instance for use in other modules
};
