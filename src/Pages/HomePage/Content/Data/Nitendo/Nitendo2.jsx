import './Nitendo2.css';

export const gameNitendo2 = [
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 20000000 },
  },
  {
    image: '/icon/Game.png',
    preorder: false,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: false,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 20000000 },
  },
];

const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(n);

export function Nitendo2() {
  return (
    <>
      <div className='bg-gray-100 m-2 mt-5 rounded-[2rem]'>
				<div
			</div>
    </>
  );
}
