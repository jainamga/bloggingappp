import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginComponent from './components/login.component';
import CardComponent from './components/Test3';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/' element={<LoginComponent/> }/>
   <Route path='/test3' element={<CardComponent/>}/>
   <Route path='/signup' element={<Signup/> }/>


   </Routes>
    </div>
  );
}

export default App;
