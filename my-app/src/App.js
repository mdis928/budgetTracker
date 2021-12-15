import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

// import NavFooter from './components/Dashboard'
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Graph from './components/Graph';
import News from './components/News';
import Settings from './components/Settings';

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/register' element={<Register/>}>
        </Route>
      </Routes>
      {/* <NavFooter/> */}
    </div>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/calendar' element={<Calendar/>}></Route>
          <Route exact path='/graph' element={<Graph/>}></Route>
          <Route exact path='/news' element={<News/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>

  );
}

export default App;