import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
