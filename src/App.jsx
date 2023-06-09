
import './index.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

function App() {

  return (
    <div className="App">  
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
