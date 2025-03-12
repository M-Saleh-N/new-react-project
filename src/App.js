import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
        <button id = "loginbutton" onClick={handleform}>LOGIN</button>
        <button id = "registerbutton" onClick={handleform}>REGISTER</button>

      <FormComponent/>
      <LoginComponent/>
    </div>
  );
}



export default App;
