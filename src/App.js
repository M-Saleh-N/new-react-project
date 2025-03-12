import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComponent';
import LoginComponent from './components/LoginComponent';
import { useState } from 'react';

function App() {
    const [formState, setFormState] = useState("register")

    const handleform = (e) => {
        const btnName = e.target.value
        setFormState(btnName)
        console.log(formState)


    }
        
  return (
    <div>
        <button value = "loginbutton" onClick={handleform}>LOGIN</button>
        <button value = "registerbutton" onClick={handleform}>REGISTER</button>
        {formState === "register" ? <FormComponent/> : <LoginComponent/>}

      <FormComponent/>
      <LoginComponent/>
    </div>
  );
}



export default App;
