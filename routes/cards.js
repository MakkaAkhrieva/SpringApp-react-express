const { Router } = require("express");
const router = Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "data", "cards.json"),
    (err, content) => {
      if (err) {
        throw err;
      } else {
        res.end(content);
      }
    }
  );
});

module.exports = router;
