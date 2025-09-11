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
    </>
  )
}

export default Game