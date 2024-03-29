import React from 'react';
import '../App.css'

export default function Story(props) {
    // function handleClick(name){
    //     console.log("AAA")
    //     return <p>AAAAAAAAAAAAAAAAAAAAAA</p>
    // }

    function toggleStory(img){
        props.handleClick(img)
    }

    return (
        <div className='story' onClick={() => toggleStory(props.img)}>
            <div className='story-image clickable'>
                <img src={props.pfp} alt='story pic'/>
            </div>
            <p>{props.username}</p>
        </div>
    )
}