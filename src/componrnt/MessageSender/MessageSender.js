import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import { InsertEmoticon, PhotoLibraryOutlined } from '@material-ui/icons';
import './MessageSender.css'
import { useStateValue } from '../contexApi/StateProvider';
import db from './../../firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")





    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
                serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })


        setInput("");
        setImageUrl("");
    }






    return (
        <div className="MessageSender">
            <div className="MessageSender_top">
                <Avatar src={user.photoURL} />
                <form >
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="MessageSender_input"
                        placeholder={`Whats on your mind, ${user.displayName}`} type="text" name="" id="" />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        className="MessageSender_input" placeholder="Image Url(Optional)" name="" id="" />
                    <button onClick={handleSubmit} type="submit">SEND</button>
                </form>
            </div>
            <div className="MessageSender_bottom">
                <div className="MessageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                    <PhotoLibraryOutlined style={{ color: "yellow" }} />
                    <h3>Photo?Video</h3>

                    <InsertEmoticon style={{ color: "green" }} />
                    <h3>Feelin/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
