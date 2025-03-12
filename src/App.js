import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
        <button id = "loginbutton">LOGIN</button>
        <button id = "registerbutton">REGISTER</button>

      <FormComponent/>
      <LoginComponent/>
    </div>
  );
}


export default App;
