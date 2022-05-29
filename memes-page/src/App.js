import './App.css';
import {BrowserRouter, Router, Route, Link, Routes} from 'react-router-dom'
import Regular from './pages/Regular'
import Hot from './pages/Hot'
import MemesBoard from './components/MemesBoard';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      {/* <Link to='/regular'>REGULAR</Link>
      <Link to='/hot'>HOT</Link> */}
      <Routes>
        <Route path='hot' element={<Hot/>}/>
        <Route path='regular' element={<Regular/>}/>
      </Routes>
      </BrowserRouter>
      <MemesBoard/>
    </div>
  );
}

export default App;
