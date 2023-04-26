import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const items = ['reactjs', 'programming', 'softwareengineering', 'softwaredesign', 'machinelearning'];
  const user = useSelector(selectUser);

  const sidebarBottomItems = (item) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{item}</p>
      </div>
    )
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="my_img" className="sidebar__bg"></img>
        {user.displayName && <Avatar className="sidebar__avatar" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>}
        {user.displayName && <h2>{user.displayName}</h2>}
        {user.email && <h3>{user.email}</h3>}
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <span>2002</span>
        </div>
        <div className="sidebar__stat">
          <p>Views of your posts</p>
          <span>967</span>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {items.map((item) => {
          return sidebarBottomItems(item);
        })}
      </div>
    </div>
  )
}

export default Sidebar;
