import { ListProduct } from './ListProduct/ListProduct'
import { IPhone17 } from './IPhone17/IPhone17'
import { Controller } from './PC_Controller/Controller'
import { Labubu } from './Labubu/Labubu'
import { Nitendo2 } from './Nitendo2/Nitendo2'
export function Data(){
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="flex-1 max-w-[1200px] min-w-[500px] bg-white">
        <ListProduct />
        <IPhone17 />
        <Controller />
        <Labubu />
        <Nitendo2 />
      </div>
    </div>
    </>
  )
}