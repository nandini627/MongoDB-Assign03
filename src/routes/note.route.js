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
  filterSort,
  filterPaginate,
  sortPaginate,
  searchFilter

  
} = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", multipleNotes);
router.get("/query", queryNotes);

router.get("/search", searchTitle);
router.get("/search/content", searchContent);
router.get("/search/all", searchAll);
router.get("/filter-paginate", filterPaginate);
router.get("/sort-paginate", sortPaginate);
router.get("/filter-sort", filterSort);
router.put("/:id", UpdateById);
router.patch("/:id", UpdateFieldId);
router.delete("/:id", deleteById);
router.delete("/bulk", deleteMulti);
router.get("search-filter",searchFilter);











module.exports = router;