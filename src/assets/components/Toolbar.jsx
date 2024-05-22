import React from 'react'
import { Bold, 
        Italic, 
        Heading2, 
        List, 
        Undo } from 'lucide-react' 
import Heading from '@tiptap/extension-heading'

function Toolbar({editor, content}) {
  return (
    <div className='bg-slate-200'>Toolbar
        <div>
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
                        editor.commands.toggleHeading({ level: 1 })

                    }}
                    className={""}>
                <Heading2/>
            </button>
        </div>

    </div>
  )
}

export default Toolbar