// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Greetings from './components/greetings'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<Greetings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);