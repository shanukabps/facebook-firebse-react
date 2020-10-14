import React from 'react'
import { Avatar } from '@material-ui/core';
import './Story.css'

function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story" >

            <Avatar src={profileSrc} />

            <h4 className="st-name">{title}</h4>

        </div >
    )
}

export default Story
