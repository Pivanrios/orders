import React, { useState } from 'react'
import { db } from '../../../firebase-config'
import { doc, getDoc } from 'firebase/firestore'

function Post() {
    const [body, setBody] = useState([])
    const setContent = async()=>{
        const post = await getDoc(doc(db, "posts", 'oVZrhU5r225nQo9wKrvz'));
        setBody(post.data().content);
        console.log("Post:",post.data().content);
    }
    setContent();
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html:body}}/>
    </div>
  )
}

export default Post