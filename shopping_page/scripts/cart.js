const cart = document.querySelector('.cart');
const curtain = document.querySelector('.curtain');

document.querySelector('.cart-button')
  .addEventListener('click', () => {
    cart.animate(
      [{ right: '-350px'}, { right: '0px'}], 
      { duration: 300, fill: 'forwards', easing: 'ease-out' }
      );
      curtain.animate(
          [{ zIndex: -1, opacity: 0 }, { zIndex: 2, opacity: 0.7 }],
          { duration: 300, fill: 'forwards', easing: 'ease-out' }
      );
});

document.querySelector('.close-cart')
  .addEventListener('click', () => {
    cart.animate(
      [{ right: '0px' }, { right: '-350px' }],
      { duration: 300, fill: 'forwards', easing: 'ease-out' }
      );
    curtain.animate(
        [{ zIndex: 2, opacity:0.7 }, { zIndex: -1, opacity:0 }],
        { duration: 300, fill: 'forwards', easing: 'ease-out' }
    );
  });

document.querySelector('.curtain').addEventListener('click', () => {
    cart.animate(
        [{ right: '0px' }, { right: '-350px' }],
        { duration: 300, fill: 'forwards', easing: 'ease-out' }
        );
      curtain.animate(
          [{ zIndex: 2, opacity:0.7 }, { zIndex: -1, opacity:0 }],
          { duration: 300, fill: 'forwards', easing: 'ease-out' }
      );
});