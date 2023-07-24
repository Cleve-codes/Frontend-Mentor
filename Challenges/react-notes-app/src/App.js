import { useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";

const initialNotes = [
  {
    text: "Wagwan! This is my first bloodclot note😎",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
  },
  {
    text: "Wagwan! This is my first bloodclot note😎",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
  },
  {
    text: "Wagwan! This is my first bloodclot note😎",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
  },
  {
    text: "Wagwan! This is my first bloodclot note😎",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
  },
  {
    text: "Wagwan! This is my first bloodclot note😎",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
  },
];

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

  return (
    <div className="container">
      <Header />
      <Search />
      <NotesList notes={notes} onAddNote={addNote} />
    </div>
  );
}
