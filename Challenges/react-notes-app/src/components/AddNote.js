import { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSaveNote = () => {
    onAddNote(noteText);
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>200 words remaining</small>
        <button className="save" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
