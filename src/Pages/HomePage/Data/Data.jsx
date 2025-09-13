import { ListProduct } from './ListProduct/ListProduct'
import { IPhone17 } from './IPhone17/IPhone17'
import { Controller } from './PC_Controller/Controller'
export function Data(){
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-5/6 bg-white">
        <ListProduct />
        <IPhone17 />
        <Controller />
      </div>
    </div>
    </>
  )
}