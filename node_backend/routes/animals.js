// // node_backend/routes/animals.js
// const express = require("express");
// const router = express.Router();
// const db = require("../db");

// // GET all animals
// router.get("/", (req, res) => {
//   db.query("SELECT * FROM animals", (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// });

// // POST create animal
// router.post("/", (req, res) => {
//   const { name, birth_year, habitat, lifespan } = req.body;
//   db.query(
//     "INSERT INTO animals (name, birth_year, habitat, lifespan) VALUES (?, ?, ?, ?)",
//     [name, birth_year, habitat, lifespan],
//     (err, result) => {
//       if (err) return res.status(500).send(err);
//       res.send("✅ Animal added.");
//     }
//   );
// });

// // PUT update animal
// router.put("/:id", (req, res) => {
//   const { name, birth_year, habitat, lifespan } = req.body;
//   db.query(
//     "UPDATE animals SET name=?, birth_year=?, habitat=?, lifespan=? WHERE animal_id=?",
//     [name, birth_year, habitat, lifespan, req.params.id],
//     err => {
//       if (err) return res.status(500).send(err);
//       res.send("🟡 Animal updated.");
//     }
//   );
// });

// // DELETE animal
// router.delete("/:id", (req, res) => {
//   db.query("DELETE FROM animals WHERE animal_id=?", [req.params.id], err => {
//     if (err) return res.status(500).send(err);
//     res.send("🔴 Animal deleted.");
//   });
// });

// module.exports = router;

// node_backend/routes/animals.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const { body, validationResult } = require("express-validator");

// GET all animals
router.get("/", (req, res) => {
  db.query("SELECT * FROM animals", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST create animal
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("birth_year").isInt().withMessage("Birth year must be an integer"),
    body("habitat").notEmpty().withMessage("Habitat is required"),
    body("lifespan").isInt().withMessage("Lifespan must be an integer")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, birth_year, habitat, lifespan } = req.body;
    db.query(
      "INSERT INTO animals (name, birth_year, habitat, lifespan) VALUES (?, ?, ?, ?)",
      [name, birth_year, habitat, lifespan],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("✅ Animal added.");
      }
    );
  }
);

// PUT update animal
router.put(
  "/:id",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("birth_year").isInt().withMessage("Birth year must be an integer"),
    body("habitat").notEmpty().withMessage("Habitat is required"),
    body("lifespan").isInt().withMessage("Lifespan must be an integer")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, birth_year, habitat, lifespan } = req.body;
    db.query(
      "UPDATE animals SET name=?, birth_year=?, habitat=?, lifespan=? WHERE animal_id=?",
      [name, birth_year, habitat, lifespan, req.params.id],
      err => {
        if (err) return res.status(500).send(err);
        res.send("🟡 Animal updated.");
      }
    );
  }
);

// DELETE animal
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM animals WHERE animal_id=?", [req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send("🔴 Animal deleted.");
  });
});

module.exports = router;