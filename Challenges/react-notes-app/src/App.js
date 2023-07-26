import { useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";

const initialNotes = [];

export default function App() {
  const [notes, setNotes] = useState(initialNotes);

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
      <Search />
      <NotesList notes={notes} onAddNote={addNote} onDeleteNote={deleteNote} />
    </div>
  );
}
