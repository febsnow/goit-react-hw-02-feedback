import React from 'react';
import ReactDOM from 'react-dom';

import FeedbackWidget from './components/FeedbackWidget/FeedbackWidget';
import PhoneBook from './components/PhoneBook/PhoneBook';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FeedbackWidget />
    <PhoneBook />
  </React.StrictMode>,
  document.getElementById('root'),
);
