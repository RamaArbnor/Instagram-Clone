import React from 'react';
import '../App.css'

export default function FullStory(props) {

    function toggleStory(){
        props.handleClick()
    }

    return (
        <div onClick={toggleStory} className="fullStory">
            <div className='storyContent'>
                <img src={props.img}/>
            </div>
        </div>
    );
}