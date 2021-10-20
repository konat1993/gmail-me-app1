import React from 'react';

import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./Login"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Mail from "./Mail"
import EmailList from "./EmailList"
import SendMail from "./SendMail"

import './App.css';
const App = () => {

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
              <Switch>
                <Route path="/mail">
                  <Mail />
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
