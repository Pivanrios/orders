'use client'
//tiptap
import { useEditor, EditorContent } from '@tiptap/react'
//tiptap extensions
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'

const Tiptap = ({onChange, content}) => {
  const handleChange = (newContent)=>{
    onChange(newContent);
  }
  //
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({levels:[2,3]}),
      BulletList.configure({ HTMLAttributes: {
                                  class: 'list',
      }})
    ],
    editorProps:{ attributes:{
                      class:"flex flex-col bg-slate-200"
    }},
    onUpdate:({editor})=>{
      handleChange(editor.getHTML());
    }
  });

  return (
    <div>
        <Toolbar editor={editor} content={content}/>
        <EditorContent editor={editor}  />
    </div>
  )
}

export default Tiptap