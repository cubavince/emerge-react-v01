//import logo from './assets/start.jpg';
import React, { useState, setEstate } from 'react';
//
import './styles/app.css';
//
import Start from './components/Start';
import Login from './components/Login';
import Options from './components/Options';
import Main from './components/Home';

const App = () => {
  const [current_content, setCurrentContent] = useState('start');
  const [current_user, setCurrentUser] = useState([0,0]);
  //onClick={() => alert("¡Has hecho clic en mí!")}
  const app_contents = {
    //'start': <div onClick={() => setCurrentContent("login")}><Start /></div>,
    'start': <Start />,
    'login': <Login />,
    'options': <Options />,
    'main': <Main />,
  }
  return (
    <div className="App">
      {current_content}
      {app_contents[current_content.split('-')[0]]}
    </div>
  );
}

export default App;
