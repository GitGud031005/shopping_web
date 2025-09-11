import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import GameDetail from './GameDetail.jsx'
import GameReview from './GameReview.jsx'

const Game = () => {
  return (
    <>
      <Header></Header>
      <div className='content'>
        <GameReview></GameReview>
        <GameDetail></GameDetail>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Game