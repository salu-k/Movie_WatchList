
import './App.css';
import Sidebar from './Component/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import MyList from './Pages/MyList';

function App() {

  return (
    
      <div className='app'>
      <Sidebar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/MyList'  element={<MyList/>}/>
      </Routes>
      
      </div>
    
  );
  
}


export default App;
