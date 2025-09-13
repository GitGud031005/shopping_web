import { ListProduct } from './ListProduct/ListProduct'
import { Nitendo2 } from './Nitendo/Nitendo2'
export function Data(){
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-5/6 bg-white">
        <ListProduct />
        <Nitendo2 />
      </div>
    </div>
    </>
  )
}