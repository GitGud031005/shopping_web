import { ListProduct } from './ListProduct/ListProduct'
import { IPhone17 } from './IPhone17/IPhone17'
export function Data(){
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-5/6 bg-white">
        <ListProduct />
        <IPhone17 />
      </div>
    </div>
    </>
  )
}