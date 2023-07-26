const Note = ({ id, text, date, onDeleteNote }) => {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <span className="delete-icon" onClick={() => onDeleteNote(id)}>
          🚮
        </span>
      </div>
    </div>
  );
};

export default Note;
