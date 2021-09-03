import React, { useEffect } from 'react';
import "./App.css"
import Header from './Header.js';
import SideBar from './SideBar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import SendMail from "./SendMail.js";
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    });
  }, [])

  return (
    <Router>

      {
        !user? (
          <Login />
        ) : (
          <div className="app">
          <Header />
          <div className="app__body">
            <SideBar />
            <Switch>
              <Route path = "/mail">
                <Mail/>
              </Route>
              <Route path = "/">
                <EmailList/>
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail/>}
        </div>
        )
      }
    </Router>
  );
}

export default App;
