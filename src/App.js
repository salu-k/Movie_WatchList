
import './App.css';
import Sidebar from './Component/Sidebar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import MyList from './Pages/MyList';

function App() {
  return (
    <Router>
      <div className='app'>
      <Sidebar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/MyList'  element={<MyList/>}/>
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
