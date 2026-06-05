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

//// Create multiple notes
const multipleNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required and cannot be empty",
        data: null
      });
    }

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      data: null
    });
  }
};


module.exports = {
  createNote: createNote,
  multipleNotes:multipleNotes
  
};