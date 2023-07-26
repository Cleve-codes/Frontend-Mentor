import { useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";

const initialNotes = [];

export default function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchNote, setSearchNote] = useState("");

  const addNote = (text) => {
    const newNote = {
      text,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
    };

    setNotes((initialNotes) => [...initialNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
    console.log("clicked");
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchNote} searchNote={searchNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchNote)
        )}
        onAddNote={addNote}
        onDeleteNote={deleteNote}
      />
    </div>
  );
}
