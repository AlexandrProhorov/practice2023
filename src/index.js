import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import './static/css/styles.scss'
import state from './data/state.ts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appState={state}/>
  </React.StrictMode>
);

reportWebVitals();
