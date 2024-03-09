import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  
  // State hook for the mode
  const [mode, setMode] = useState('light'); // light or dark mode
  return (
    <>
    <Router>
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert/>

      <div className="container my-3">
        
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter your text here to analyze" />} />
        <Route exact path="/about" element={<About/>} />
        
      </Routes>

      
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;
