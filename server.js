const app = require("./app");
const { run } = require("./db");
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
run()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
