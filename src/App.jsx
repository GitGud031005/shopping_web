
import './App.css'
import { HomePage } from './Pages/HomePage/HomePage'
import {Slidebar} from './Pages/Slidebar/Slidebar'
import {Header} from './Pages/Header/Header'
import { SocialSlidebar } from './Pages/Slidebar/SocialSlidebar'
function App() {

  return (
    <>
      <Header />
      <SocialSlidebar />
      <Slidebar />
      <HomePage />
    </>
  )
}

export default App
