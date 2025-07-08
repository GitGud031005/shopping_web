const header    = document.querySelector('.upper-header');
const threshold = 30;

window.addEventListener('scroll', () => {
  header.classList.toggle('shrink', window.scrollY > threshold);
}, { passive: true });

document.querySelector('.search-bar-js')
  .addEventListener('input', searchButtonDelete);

function searchButtonDelete(event){
  const val = document.querySelector('.search-bar-js').value;
  const deleteButton = document.querySelector('.search-button-delete-js');
  if(val ===''){
    deleteButton.innerHTML = '';
  }else{
    deleteButton.innerHTML = '&#x2715;';
  }
}

document.querySelector('.search-button-delete-js')
  .addEventListener('click', deleteSearch);

function deleteSearch(){
  document.querySelector('.search-bar-js').value = '';
}