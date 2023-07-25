import { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0)
      setNoteText(e.target.value);
  };

  const handleSaveNote = () => {
    // Prevent empty notes
    if (noteText.trim().length > 0) {
      // Add note
      onAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={handleChange}
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} words remaining</small>
        <button className="save" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
