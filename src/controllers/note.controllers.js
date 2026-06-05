const mongoose = require('mongoose');
const Note = require('../models/note.model.js');

// Helper
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);


//// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null
      });
    }

}
catch(error) {
    console.error("Error creating note:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the note",
      data: null
    });
  }
};




module.exports = {
  createNote: createNote,
  
};