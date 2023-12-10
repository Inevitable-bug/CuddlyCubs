const cartToggle = document.querySelector('.cart-toggle');
const cartSection = document.querySelector('.cart-section');
const nav = document.querySelector('.nav');
const display = document.querySelector('.display');

display.addEventListener('click',
()=>{
  nav.classList.toggle('navi')
})
cartToggle.addEventListener('click', () => {
  cartSection.style.display= cartSection.style.display==='block'?'none':'block'
});

var buttons = document.querySelectorAll('.add-to-cart-btn');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    var imageSrc = document.querySelectorAll('.trendimg')[index].getAttribute('src');
    var cartDiv = document.querySelector('.cart-section');
    var imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('imag');
    var con = document.createElement('div');
       con.classList.add('dif');
        con.appendChild(imageElement);
        var mark = document.createElement('button');
    mark.classList.add('mark');
    mark.classList.add('but')
    mark.innerHTML='Buy';
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.classList.add('but')
    remove.innerHTML='Cancel';

    con.appendChild(mark);
    con.appendChild(remove);
    cartDiv.appendChild(con);
    
    var but = document.querySelectorAll('.but')
    but.forEach(function(button, index) {
  button.addEventListener('click', function() {
    // ...

    mark.addEventListener('click', function() {
      con.remove();
    });

    remove.addEventListener('click', function() {
      con.remove();
    });

    
  });
});
  })});
  

//Categories
const slider = document.getElementById('slider');
let currentIndex = 0;
const images = slider.getElementsByTagName('img');
const totalSlides = images.length;

function showSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 4 seconds
setInterval(changeSlide, 4000);