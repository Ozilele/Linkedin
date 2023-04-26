import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { getPosts } from './firebaseAPI';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [newPost, setNewPost] = useState(true);

  const fetchData = async () => {
    const res = await getPosts();
    console.log(res);
    setPosts(res);
  }

  useEffect(() => {
    if(newPost) {
      setNewPost(false);
      fetchData();
    }
  }, [newPost]);

  const handleInputMsg = (e) => {
    setInputMsg(e.target.value);
  }

  const sendPost = async (event) => {
    event.preventDefault();
    try {
      const postRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: inputMsg,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID " + postRef.id);
      setNewPost(true);
      setInputMsg('');
    } catch(e) {
      console.error("Error adding document");
    }
  }

  return (
    <div className="feed__section">
      <div className="input__container">
        <div className="input__section">
          <CreateIcon className="create__icon"/>
          <form className="feed__form">
            <input value={inputMsg} onChange={handleInputMsg} type="text" placeholder="Start a post"></input>
            <button type="submit" onClick={sendPost} className="sbm__btn">Send</button>
          </form>
        </div>
        <div className="icons__section">
          <div className="icon__section">
            <PhotoIcon className="photo__icon"/>
            <p>Photo</p>
          </div>
          <div className="icon__section">
            <SlideshowIcon className="video__icon"/>
            <p>Video</p>
          </div>
          <div className="icon__section">
            <EventIcon className="event__icon"/>
            <p>Event</p>
          </div>
          <div className="icon__section">
            <ArticleIcon className="article__icon"/>
            <p>Write article</p>
          </div>
        </div>
      </div>

      
      <div className="posts__container">
        <FlipMove >
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post 
              key={id} 
              name={name} 
              description={description} 
              message={message} 
              photoUrl={photoUrl} 
              />
            )
        })}
        </FlipMove>
      </div>
      
    </div>
  )
};

export default Feed;