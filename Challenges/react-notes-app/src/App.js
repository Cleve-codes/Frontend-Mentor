import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";

const initialNotes = [];

export default function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      text,
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
    };

    setNotes((initialNotes) => [...initialNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
    console.log("clicked");
  };

  return (
    <div className={darkMode ? `dark-mode` : ""}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchNote} searchNote={searchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
