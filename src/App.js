import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React ,{ useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  const[mode,setmode] = useState('light')

  const[alert,setalert] = useState(null)

  const showalert = (message,type)=>{
    setalert({
      message:message,
      type:type
     })
     setTimeout(() => {
      setalert(null);
     }, 1500);
  }

  const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'gray';
      showalert("Dark Mode has been enabled","success")
  
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
  
    }
  }
  return (
    <>
    <Router>
    <Navbar logo ="TextChanger" mode={mode} togglemode={togglemode}/>
    <Alert alert = {alert}/>
    <div className='container my-5'>
        <Routes>
            <Route exact path="/about" element ={<About mode={mode}/>}/>
            <Route exact path="/" element = {<TextForm heading = "Enter the Text to Analysis" showalert = {showalert}  mode={mode} text = "Roshan"/>}/>            
        </Routes>
    </div>
    </Router>
    </>

  );
}

export default App;
