import React from 'react';
import Story from './Story';
import '../App.css'
import data from '../data/stories.js'


export default function StoryPanel() {

    

    const stories = data.map(story => {
        return (
            <Story
                key={story.id}
                pfp={story.pfp}
                username={story.username}
                
            />

        )
    })

    return (
        <div className='storyPanel'>
            {stories}
            


        </div>
    );

}