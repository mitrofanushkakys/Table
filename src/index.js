import React from 'react';
import ReactDOM from 'react-dom';
import Users from './component/users';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
  <Users/>
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(<Users/>, document.getElementById('root'))
