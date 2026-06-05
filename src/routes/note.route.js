const express = require("express");
const router = express.Router();

const {
  createNote,
  multipleNotes,
  
} = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", multipleNotes);


module.exports = router;