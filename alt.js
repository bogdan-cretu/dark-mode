<script>


let bkg = document.querySelectorAll('.marquee_item');
let txt = document.querySelectorAll('.marquee_text-item');
let subhead = document.querySelector('.marquee_sub-head');
let gradient = document.querySelector('.marquee_gradient');
let gradient2 = document.querySelector('.is-2');
let light = document.querySelector('#light');
let dark = document.querySelector('#dark');






function changeStylesLight(){
    let backgroundColor1Elements = document.querySelectorAll('.background-color-black');
    let textColor1Elements = document.querySelectorAll('.text-color-white');
    let containerDarkGrayElements1 = document.querySelectorAll('.containers-dark-gray');
    let containerLightGrayElements1 = document.querySelectorAll('.containers-dark-gray-medium');
    let containerBlackElements1 = document.querySelectorAll('.containers-black');
    let containerBlur1 = document.querySelectorAll('.containers-dark-blur');
    let containerStrokeElements1 = document.querySelectorAll('.stroke-gray-dark');
    let containerStrokeElements3 = document.querySelectorAll('.stroke-white');

                backgroundColor1Elements.forEach((element) => {
                    element.classList.remove('background-color-black')
                    element.classList.add('background-color-white')
                })
                
                textColor1Elements.forEach((element) => {
                    element.classList.remove('text-color-white')
                    element.classList.add('text-color-black')
                })
                
                containerDarkGrayElements1.forEach((element) => {
                    element.classList.remove('containers-dark-gray')
                    element.classList.add('containers-gray-medium')
                })
                
                containerLightGrayElements1.forEach((element) => {
                    element.classList.remove('containers-dark-gray-medium')
                    element.classList.add('containers-gray-light')
                })
                
                containerBlackElements1.forEach((element) => {
                    element.classList.remove('containers-black')
                    element.classList.add('containers-white')
                })
                containerBlur1.forEach((element) => {
                    element.classList.remove('containers-dark-blur')
                    element.classList.add('containers-light-blur')
                })
                
                containerStrokeElements1.forEach((element) => {
                    element.classList.remove('stroke-gray-dark')
                    element.classList.add('stroke-light')
                })
                containerStrokeElements3.forEach((element) => {
                    element.classList.remove('stroke-white')
                    element.classList.add('stroke-black')
                })
                
    }

function changeStylesDark(){

let backgroundColor2Elements = document.querySelectorAll('.background-color-white');
let textColor2Elements = document.querySelectorAll('.text-color-black');
let containerDarkGrayElements2 = document.querySelectorAll('.containers-gray-medium');
let containerLightGrayElements2 = document.querySelectorAll('.containers-gray-light');
let containerBlackElements2 = document.querySelectorAll('.containers-white');
let containerBlur2 = document.querySelectorAll('.containers-light-blur');
let containerStrokeElements2 = document.querySelectorAll('.stroke-light');
let containerStrokeElements4 = document.querySelectorAll('.stroke-black');

    backgroundColor2Elements.forEach((element) => {
        element.classList.remove('background-color-white')
        element.classList.add('background-color-black')
    })
    textColor2Elements.forEach((element) => {
        element.classList.remove('text-color-black')
        element.classList.add('text-color-white')
    })
    containerDarkGrayElements2.forEach((element) => {
        element.classList.remove('containers-gray-medium')
        element.classList.add('containers-dark-gray')
    })
    containerLightGrayElements2.forEach((element) => {
        element.classList.remove('containers-gray-light')
        element.classList.add('containers-dark-gray-medium')
    })
    containerBlackElements2.forEach((element) => {
        element.classList.remove('containers-white')
        element.classList.add('containers-black')
    })
    containerBlur2.forEach((element) => {
        element.classList.remove('containers-light-blur')
        element.classList.add('containers-dark-blur')
    })
    containerStrokeElements2.forEach((element) => {
        element.classList.remove('stroke-light')
        element.classList.add('stroke-gray-dark')
    })
    containerStrokeElements4.forEach((element) => {
        element.classList.remove('stroke-black')
        element.classList.add('stroke-white')
    })

}




if (localStorage.getItem('mode') == 'null'){
	localStorage.setItem('mode', 'dark')
};




light.addEventListener('click', ()=>{	
        localStorage.setItem('mode', 'light')
        document.getElementById("settings-icon").src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63ca8f357d71b65856d95756_gear-icon-black.svg";
        document.getElementById('light-icon').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63ca8f3773e6859980d751df_light-icon-black.svg";
        document.getElementById('dark-icon').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63ca8f35198b210dc8aa3f1e_dark-icon-black.svg";
        document.getElementById('cart').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63cbfdee440ed78869ded344_direct%20buy%20black.svg";
        document.getElementById('heart').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63cbfdedd802df173d74a305_latest%20works%20black.svg";
        gradient.classList.add('background-gradient-white')
        gradient2.classList.add('background-gradient-bottom')
        bkg.forEach(function(elem){
        elem.classList.add('text-color-black-fade')})
        changeStylesLight();
        
        console.log('Light mode activated');  
 });
 
    
dark.addEventListener('click', ()=>{ 		
    		localStorage.setItem('mode','dark')
        document.getElementById('light-icon').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63c92da7b437662d07f9c074_light-icon.svg";
		document.getElementById('dark-icon').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63ca8f355fb8d05c454b61cc_dark-icon.svg";
        document.getElementById("settings-icon").src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63c6ab3dc993830542c74309_gear-icon.svg";
        document.getElementById('cart').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63cbfdb170ce980bc8428e47_direct%20buy.svg";
        document.getElementById('heart').src="https://uploads-ssl.webflow.com/5dbc9b2e04f8b26d796b15fe/63cbfdb0b62733f199150ddd_latest%20works.svg";
        gradient.classList.remove('background-gradient-white')
        gradient2.classList.remove('background-gradient-bottom')
        bkg.forEach(function(elem){
        elem.classList.remove('text-color-black-fade')})
        changeStylesDark();
        
      
        console.log('Dark mode activated');
 });       
    
    
    



</script>





<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
<script>
// set variables
let items = $(".marquee_item");
let textItem = $(".marquee_text-item");
let wrap = $(".marquee_wrap");
let totalItems = items.length / 2 + 1;
let duration = totalItems * 3.2;



// switch which item is active
 function makeItemActive(myIndex) {
 				items.removeClass("active")
 				items.removeClass("bactive")
 				if (localStorage.getItem('mode') == 'dark'){
        
        
        $(".marquee_list").each(function (index) {
          $(this).find(".marquee_item").eq(myIndex).addClass("active");
        });
        } else if(localStorage.getItem('mode') == 'light'){
        
        	$(".marquee_list").each(function (index) {
          $(this).find(".marquee_item").eq(myIndex).addClass("bactive");
        });
        }
        
        textItem.removeClass("active");
        textItem.eq(myIndex).addClass("active");
        
        
      }

makeItemActive(3);

// check if item is in center of wrapper
function checkPosition() {
  let wrapCenter = wrap.offset().top + wrap.height() / 2;
  items.each(function (index) {
    let itemHeight = $(this).height() / 2;
    let offsetTop = $(this).offset().top + itemHeight;
    if (offsetTop < wrapCenter + itemHeight / 2 && offsetTop > wrapCenter) {
      let myIndex = $(this).index();
      makeItemActive(myIndex);
    }
  });
}

// create vertical loop
let marquee = gsap.timeline({ repeat: -1 }).fromTo(
  ".marquee_track",
  { yPercent: 0 },
  {
    yPercent: -50,
    duration: duration,
    ease: "none",
    onUpdate: () => {
      checkPosition();
    }
  }
);
</script>

