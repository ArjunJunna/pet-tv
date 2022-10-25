import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import {DataContextProvider} from './context/dataContext';
import { UserDataContextProvider } from './context/userDataContext';
import {AuthProvider} from './context/authContext';


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataContextProvider>
        <UserDataContextProvider>
          <Router>
            <App />
          </Router>
        </UserDataContextProvider>
      </DataContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
