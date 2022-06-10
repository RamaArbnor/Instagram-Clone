import React from 'react';
import naruto from "../images/naruto.jpg"
import '../App.css'

export default function Post() {

    return(
        <div className='post'>
            <div className='postUsername'>
                <img src={naruto} alt='pfp'/>
                <p>Naruto Uzumaki</p>
            </div>
            <div className='postImg'>
                <img src={naruto} alt='post Image'/>
            </div>
            <div className="postDescription">
                <p><span role="img">👍</span> Liked by <strong>Sasuke</strong> and <strong>69</strong> others.</p>
                <p><strong>NarutoUzumaki</strong> Qe qitu sa e rreha painin hehe !</p>
            </div>
        </div>
    )

}