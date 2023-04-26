import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { logout, selectUser, login } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => { // to persist the logged/registered user even when there is refresh of a site 
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth) { // User logged in
        console.log(userAuth);
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else { // User logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ?  <Login /> :
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div> 
      }
    </div>
  );
}

export default App;
