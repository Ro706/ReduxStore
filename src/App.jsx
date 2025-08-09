import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App;