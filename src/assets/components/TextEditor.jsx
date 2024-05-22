import React, {useState} from 'react'
//tiptap component
import Tiptap from './Tiptap'
//database
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

function TextEditor() {
    //create a state for out content
    const [content, setContent] = useState('');
    //set the content of the input 
    const handleContentChange = (value)=>{
        setContent(value);
    }
    //add document 
    const handleSubmit = async (e)=>{
      e.preventDefault();
      await addDoc(collection(db, "posts"),{content: content});
      location.reload();
    }
  return (
    <div className='w-full flex flex-col items-center'>   
        <form onSubmit={handleSubmit}
              className=' w-4/5 bg-slate-300'>
            <h1>Text Editor</h1>
            <Tiptap
                content={content}
                onChange={(newContent)=>{handleContentChange(newContent)}}/>
        </form>
      
    </div>
  )
}

export default TextEditor