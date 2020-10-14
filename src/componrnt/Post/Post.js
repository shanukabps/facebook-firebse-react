import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function Post({ profilePic, image, username, timestamp, message }) {

    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfor">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <CommentIcon />
                    <p>Comment</p>

                </div>

                <div className="post_option">
                    <ShareIcon />
                    <p>Share</p>

                </div>
            </div>

        </div>
    )
}

export default Post
