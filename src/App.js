import React, { useEffect } from 'react';

import { auth } from './services/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/Login"
import Header from "./components/Header/Header"
import Sidebar from "./components/SideBar/Sidebar"
import MailDetails from "./pages/MailDetails/MailDetails"
import EmailList from "./pages/EmailList/EmailList"
import SendMail from "./components/SendMail/SendMail"

import './App.css';
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  const user = useSelector(selectUser)
  return (
    <Router>

      {
        !user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Sidebar mobileClassName="sidebarMobile" />
              <Switch>
                <Route path="/mail">
                  <MailDetails />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )
      }
    </Router>
  );
}

export default App;
