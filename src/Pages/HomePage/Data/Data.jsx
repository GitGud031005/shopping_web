import { ListProduct } from './ListProduct/ListProduct'
import { IPhone17 } from './IPhone17/IPhone17'
import { Controller } from './PC_Controller/Controller'
import { Labubu } from './Labubu/Labubu'
export function Data(){
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-5/6 bg-white">
        <ListProduct />
        <IPhone17 />
        <Controller />
        <Labubu />
      </div>
    </div>
    </>
  )
}