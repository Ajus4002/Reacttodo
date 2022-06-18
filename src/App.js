import "./App.css";
import { useState } from "react";
import CreateArea from "./components/createarea";
import Footer from "./components/footer";
import Nav from "./components/navBar";
import Note from "./components/note";


function App() {
const [notes, setNotes] = useState([]);

  function addNote(newnote){
    setNotes(previousnote=>{
      return [...previousnote,newnote]
    }
      )

  }

  function deleteNote(id) {
    setNotes(previousnote => {
      return previousnote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  
  return (
    <div className="App">
      <Nav />
      <CreateArea 
      onadd={addNote}
      />

    {  notes.map((noteItem,index)=>
       {
      return <Note
      key={index}
      id={index}
title={noteItem.title}
content={noteItem.content}
onDelete={deleteNote}
      
      />})
}
     
      <Footer />
    </div>
  );
}

export default App;
