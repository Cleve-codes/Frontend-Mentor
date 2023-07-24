const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <span>🚮</span>
      </div>
    </div>
  );
};

export default Note;
