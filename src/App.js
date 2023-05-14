import logo from './logo.svg';
// // import './myApp.css';
// import Registration from "./components/Registrantion";
import Header from './components/Header';
import Registration from './components/Registration';
import SignupForm from './components/SignupForm';
const App = () => {
  return (
    <div>
      <Header message={"Registration Form"}/>
        <SignupForm/>
      <Header message={"Made by ©️Sumana"}/>
    </div>
  );
}

export default App;