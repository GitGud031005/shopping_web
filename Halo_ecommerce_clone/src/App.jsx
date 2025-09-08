import './App.css'
import {Routes, Route} from 'react-router'
import Homepage from './pages/home/Homepage'
import Game from './pages/game/Game'

function App() {
  return (
    <Routes>
      <Route path='home' element={<Homepage/>} />
      <Route path='game' element={<Game/>} />
      {/* <Route path='product' element={ } /> */}
    </Routes>
  )
}

export default App
