import "./App.css";
import { useState } from "react";
import CreateArea from "./components/createarea";
import Footer from "./components/footer";
import Nav from "./components/navBar";
import Note from "./components/note";


function App() {
const [notes, setnotes] = useState([]);

  function addNote(newnote){
    setnotes(previousnote=>{
      return [...previousnote,newnote]
    }
      )

  }

  function deleteNote(id){
    console.log('detjkfahkj');

  }
  return (
    <div className="App">
      <Nav />
      <CreateArea 
      onadd={addNote}
      />

    {  notes.map((noteItems)=>
       {
      return <Note
title={noteItems.title}
content={noteItems.content}
onDelete={deleteNote}
      
      />})
}
     
      <Footer />
    </div>
  );
}

export default App;
