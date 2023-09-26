import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginComponent from './components/login.component';
import CardComponent from './components/Test3';
import Signup from './pages/Signup';
import UserDashBoard from './pages/UserDashBoard';
import Privateroute from './components/Privateroute';
import Profileinfo from './pages/Profileinfo';
import About from './pages/About';
import AddPost from './components/AddPost';
import Trail from './components/trail';
import NewFeed from './components/NewFeed';
import PostPage2 from './pages/PostPage copy';
import PostPage from './pages/PostPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">
      <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/' element={<LoginComponent/> }/>
   <Route path='/test3' element={<CardComponent/>}/>
   <Route path='/signup' element={<Signup/> }/>
    
    <Route path='/login' element={<LoginComponent/> }/>
    <Route path='/test3' element={<CardComponent/>}/>
    
    <Route path='/post/:postId' element={<PostPage/>}/>
    <Route path='/post2/:postId' element={<PostPage2/>}/>

    <Route path='/feed' element={<NewFeed/>}/>
    <Route path="/trail" element={<Trail/>} />
    <Route path='/addPost' element={<AddPost/>}/>
    <Route path='/about' element={<About/> }/>
    <Route path='/user' element={<Privateroute/> }>
    <Route path='dashboard' element={<UserDashBoard/> }/>
    <Route path='profile' element={<Profileinfo/> }/>

    </Route> 

   </Routes>
    </div>
  );
}

export default App;
