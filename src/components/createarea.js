import React from "react";
import { useState } from "react";

function CreateArea(props){

    const [note, setNote] = useState({
        title:"",
        content:""
    })
function handlechange(event){

    const {name,value}=event.target;
    setNote(prviousnote=>{
        return {
            ...prviousnote,
            [name]:value
        }
        })
}
function submitnote(event){
    props.onadd(note)
    setNote({
        title:"",
        content:""
    })
   
    event.preventDefault();

}

    return(
        <di>
        <form>
        <input type="text" onChange={handlechange}  name='title' value={note.title} placeholder="title"/>
        <textarea type="text" onChange={handlechange}  name="content" value={note.content} placeholder="Take a note ..." rows='3' />
        
        <button onClick={submitnote}>Add</button>
        </form>
        </di>
    )
}
export default CreateArea