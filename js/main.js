'use strict'

{

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
  
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex > images.length - 1){
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  play();

  // iを写真の枚数＋１未満にする
  for (let i = 1; i < 14; i++){
    var photo_src = "photo/" + i + ".png"
    var photo_ul = document.getElementById('photo_ul');
    var new_li = document.createElement('li');
    var new_a = document.createElement('a');
    new_a.setAttribute('href', photo_src)
    new_a.setAttribute('data-lightbox','group')
    var new_img = document.createElement('img');
    new_img.setAttribute('src', photo_src)
    new_a.appendChild(new_img);
    new_li.appendChild(new_a);
    photo_ul.appendChild(new_li)
  }

}