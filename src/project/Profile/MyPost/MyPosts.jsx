import Post from "./Post/Post";
import React from "react";



let newTextElement = React.createRef();

let buttonClikElement =()=>{
    let text = newTextElement.current.value;
    alert(text);
}

const MyPosts =(p)=>{
    let postElement = p.state.post.map(post => <Post id={post.id} name={post.name} message={post.message} image={post.image}/>)
    return (

        <div>
            <div>
                <textarea ref={newTextElement}></textarea>
            </div>
            <div>
                <button onClick={buttonClikElement}></button>
            </div>
            <div>
                {postElement}
            </div>

        </div>
    )
}

export default MyPosts;