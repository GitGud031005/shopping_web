export const gameNitendo2 =[{
  image: 'icon/Game.png',
  prorder: 1,
  name: 'Game Monkey Kong Bananz Nitendo Switch 2',
  price:{
    from: 18000000,
    to: 0
  }
},{
  image: 'icon/Game.png',
  prorder: 1,
  name: 'Game Monkey Kong Bananz Nitendo Switch 2',
  price:{
    from: 18000000,
    to: 0
  }
},{
  image: 'icon/Game.png',
  prorder: 1,
  name: 'Game Monkey Kong Bananz Nitendo Switch 2',
  price:{
    from: 18000000,
    to: 20000000
  }
},{
  image: 'icon/Game.png',
  prorder: 0,
  name: 'Game Monkey Kong Bananz Nitendo Switch 2',
  price:{
    from: 18000000,
    to: 0
  }
},{
  image: 'icon/Game.png',
  prorder: 0,
  name: 'Game Monkey Kong Bananz Nitendo Switch 2',
  price:{
    from: 18000000,
    to: 20000000
  }
}]

export function Price2Str(price){
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' &#8363;';
}
