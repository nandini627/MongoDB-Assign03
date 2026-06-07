const express = require("express");
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById,
  UpdateById,
  UpdateFieldId,
  deleteById,
  deleteMulti,
  searchTitle,
  searchContent,
  searchAll,
  
} = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", multipleNotes);
router.get("/query", queryNotes);

router.get("/search", searchTitle);
router.get("/search/content", searchContent);
router.put("/:id", UpdateById);
router.patch("/:id", UpdateFieldId);
router.delete("/:id", deleteById);
router.delete("/bulk", deleteMulti);

router.get("/search/all", searchAll);







module.exports = router;