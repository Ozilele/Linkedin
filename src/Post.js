import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="top__post__section">
        <Avatar src={photoUrl} className="user__avatar">{name[0]}</Avatar>
        <div className="user__info">
          <h3 className="user__name">{name}</h3>
          <p className="user__desc">{description}</p>
        </div>
      </div>
      <p className="user__message">{message}</p>
      <div className="likes__section">
        <ThumbUpIcon className="like__icon"/>
        <span>7</span>
      </div>
      <div className="post__reaction__section">
        <button>I'm curious...</button>
        <button>This will help me...</button>
        <button>Love this...</button>        
      </div>
      <div className="feedback__section">
        <button>
          <ThumbUpAltOutlinedIcon className="like__icon__out"/>
          <span>Like</span>
        </button>
        <button>
          <ChatOutlinedIcon />
          <span>Comment</span>
        </button>
        <button>
          <ShareOutlinedIcon />
          <span>Share</span>
        </button>
        <button>
          <SendOutlinedIcon />
          <span>Send</span>
        </button>
      </div>
    </div>
  )
})

export default Post;
