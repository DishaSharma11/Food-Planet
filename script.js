let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}



document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





// swiper 


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});
  
  
  /* <about and review section> */
  var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
  
/* <about and review section end> */

document.querySelector(".checkName").onkeydown=e=>{
    if (e.key.match(/[a-z ]/gmi)==null){
        e.preventDefault()
    }
}





// loader javascripting

function loader() {
    document.querySelector('.loader-container').classList.add("fade-out")
}

function fadeOut() {
    setInterval(loader,1500)
}

window.onload = fadeOut;