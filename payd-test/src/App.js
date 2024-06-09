// import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Response from './components/Response'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
    <Routes>
    <Route path='/' element={<Response/>}/>
    <Route path='/create_user' element={<Posts/>}/>
    </Routes>
    </div>
  );
}

export default App;
