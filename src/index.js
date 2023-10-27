import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import UseReducerEx from './UseReducerEx';
// import UseReducer from './UseReducer';
// import Fetch from './Fetch';
// import BookList from './BookList';
// import Form from './Form';
// import A from './components/A';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <div className="container">
      <UseReducerEx/>
    </div>
  </React.StrictMode>
);
