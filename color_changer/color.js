const colors = ['green' ,'yellow','rgb(96,96,96)', "#f55028",'red'];

const btn = document.getElementById('js-btn');
const color =document.querySelector('.js-color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() *colors.length);
}