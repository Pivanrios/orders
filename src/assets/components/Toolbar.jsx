import React from 'react'
import { Bold, 
        Italic, 
        Heading2, 
        List, 
        Undo } from 'lucide-react' 


function Toolbar({editor, content}) {
  return (
    <div className='flex flex-row justify-between mx-2'>
        <div className='flex flex-row '>
            <button onClick={(e)=>{
                e.preventDefault();
                editor.chain().focus().toggleBold().run();
            }}
            className=' active:bg-slate-300'>
                <Bold/>
            </button>
    
            <button onClick={(e)=>{
                e.preventDefault();
                editor.chain().focus().toggleItalic().run();
            }}
                >
                <Italic/>
            </button>
            <button
                    onClick={(e)=>{
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 2 }).run();
                    }}
                    className={""}>
                <Heading2/>
            </button>
            <button
                onClick={(e)=>{
                    e.preventDefault();
                    editor.chain().focus().toggleUndo().run();
                }}>
                <Undo/>
            </button>
            <button
                onClick={(e)=>{
                    e.preventDefault();
                    editor.chain().focus().toggleBulletList().run();
                }}>
                <List/>
            </button>
        </div>
        {content && (
            <button className='px-2 bg-slate-400 rounded-full'>add</button>
        )}
    </div>
  )
}

export default Toolbar