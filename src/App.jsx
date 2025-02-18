
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beach from './components/explore/Beach';
import Nature from './components/explore/Nature';
import Unique from './components/explore/Unique';
import Unesco from './components/explore/Unesco';
import Hillstation from './components/explore/Hillstation';
import Aquatic from './components/explore/Aquatic';
import Forts from './components/explore/Forts';
import Temples from './components/explore/Temples';
import About from './components/navbar/About';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beach' element={<Beach />} /> 
        <Route path='/nature' element={<Nature />} /> 
        <Route path='/unique' element={<Unique />} />
        <Route path='/unesco' element={<Unesco />} />
        <Route path='/hillstations' element={<Hillstation />} />
        <Route path='/aquatic' element={<Aquatic />} />
        <Route path='/forts' element={<Forts />} />
        <Route path='/temples' element={<Temples />} />
        <Route path='/about' element={<About />} />






      </Routes>
    </Router>
      

    </>
  )
}

export default App
