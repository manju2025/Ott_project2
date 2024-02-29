import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
// import homeCategoriess from './pages/homeCategoriess';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

import Categoriess from './pages/Categoriess';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        {/* <Route path='/homeCategoriess' element={<homeCategoriess/>} /> */}
        <Route path="/categoriess" element={<Categoriess/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path="/movie-details/:id"  element={<MovieDetails/>} />
        </Routes>
        {/* <Navbar1/> */}
        </AuthContextProvider>
       
    </>
  );
}

export default App;
