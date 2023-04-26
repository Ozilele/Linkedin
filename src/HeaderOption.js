import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const HeaderOption = ({ avatar, name, Icon, onClick }) => {

  const user = useSelector(selectUser);

  const handleClick = () => {
    if(!onClick) {
      console.log('Click');
    }
    else {
      onClick();
    }
  }

  return (
    <div className="header__options" onClick={handleClick}>
      {Icon && <Icon className="header__icon"/>}
      {(avatar && !user) && <Avatar className="header__icon"></Avatar>}
      {(avatar && user?.displayName) &&
        <Avatar className="header__icon" src={user ? user.photoUrl : ''} onClick={onClick}>{user ? user?.displayName[0] : ''}</Avatar>
      }
      <h3 className="header__option__title">{name}</h3>
    </div>
  );
}

export default HeaderOption;
