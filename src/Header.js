import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInLogo from './img/Linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import {  signOut } from "firebase/auth";

const Header = () => {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth).then(() => {
      console.log("Logged out of app");
    });
  }

  return (
    <div className="header">

      <div className="header__left">
        <img src={LinkedInLogo} alt=""></img>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption name="Home" Icon={HomeIcon} />
        <HeaderOption name="My Network" Icon={SupervisorAccountRoundedIcon} />
        <HeaderOption name="Jobs" Icon={BusinessCenterRoundedIcon} />
        <HeaderOption name="Messaging" Icon={MessageRoundedIcon} />
        <HeaderOption name="Notifications" Icon={NotificationsRoundedIcon} />
        <HeaderOption 
          name="Me"
          avatar={true} 
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );

}


export default Header;


