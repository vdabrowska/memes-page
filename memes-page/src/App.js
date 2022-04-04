import './App.css';
import {BrowserRouter, Router, Route, Link, Routes} from 'react-router-dom'
import Regular from './pages/Regular'
import Hot from './pages/Hot'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/regular'>REGULAR </Link>
      <Link to='/hot'>HOT</Link>
      <Routes>
        <Route path='hot' element={<Hot/>}/>
        <Route path='regular' element={<Regular/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
