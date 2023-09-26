import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginComponent from './components/login.component';


function App() {
  return (
    <div className="App">
      <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/' element={<LoginComponent/> }/>
   

   </Routes>
    </div>
  );
}

export default App;
