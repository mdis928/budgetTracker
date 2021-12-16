import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

// import NavFooter from './components/Dashboard'
import Dashboard from './components/Dashboard';
import GeneralLedger from './components/GeneralLedger';
import Graph from './components/Graph';
import HabitsAndGoals from './components/HabitsAndGoals';
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
          <Route exact path='/generalledger' element={<GeneralLedger/>}></Route>
          <Route exact path='/graph' element={<Graph/>}></Route>
          <Route exact path='/HabitsAndGoals' element={<HabitsAndGoals/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>

  );
}

export default App;