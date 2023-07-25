import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          date={note.date}
          onDeleteNote={onDeleteNote}
        />
      ))}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
