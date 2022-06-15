import React from 'react';
import Story from './Story';
import '../App.css'
import data from '../data/stories.js'


export default function StoryPanel(props) {

    

    const stories = data.map(story => {
        return (
            <Story
                key={story.id}
                pfp={story.pfp}
                username={story.username}
                img={story.img}
                handleClick={props.handleClick}
                
            />

        )
    })

    

    return (
        <div className='storyPanel'>
            {stories}
            


        </div>
    );

}