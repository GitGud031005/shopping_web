import './Data.css'
import { ListProduct } from './ListProduct/ListProduct'
import { Nitendo2 } from './Nitendo/Nitendo2'
export function Data(){
  return (
    <>
    <div className="data-main-page">
      <div className="data-main-page-blank"></div>
      <div className="data-main-page-content">
        <ListProduct />
        <Nitendo2 />
      </div>
      <div className="data-main-page-blank"></div>
    </div>
    </>
  )
}