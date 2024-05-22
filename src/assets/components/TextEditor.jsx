import React, {useState} from 'react'
import Tiptap from './Tiptap'

function TextEditor() {
    const [content, setContent] = useState('');
    const handleContentChange = (value)=>{
        setContent(value);
    }
  return (
    <div className='w-full flex flex-col items-center'>   
        <form className=' w-4/5 h-4/5 bg-slate-300'>
            <h1>Text Editor</h1>
            <Tiptap
                content={content}
                onChange={(newContent)=>{handleContentChange(newContent)}}/>
        </form>
    </div>
  )
}

export default TextEditor