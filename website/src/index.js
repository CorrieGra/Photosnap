import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

function Wrapper() {
  const history = useHistory();

  return (
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  )
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
