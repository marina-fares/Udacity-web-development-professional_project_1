/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// start time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

// Simple calculator 
function pushBtn(obj){
    var inputtest = document.getElementById('inputlabel');
    var pushed = obj.innerHTML;
    if (pushed == '='){
        inputtest.innerHTML = eval(inputtest.innerHTML);
    }
    else if (pushed == 'AC'){
        inputtest.innerHTML = '0';
    }
    else{
        if(inputtest.innerHTML == '0'){
            inputtest.innerHTML = pushed;
        }else{
            inputtest.innerHTML +=pushed;
        }
    }
}


// counter 

let counter = 0;

function plus(obj){
    
    counter++;
    var innercount = document.getElementById('counter');
    innercount.innerHTML = counter;
 //   console.log(counter);
//    console.log(innercount.innerHTML);
}
function minus(obj){
    
    counter--;
    var innercount = document.getElementById('counter');
    innercount.innerHTML = counter;
 //   console.log(counter);
//    console.log(innercount.innerHTML);
}
function Reset(obj){
    var innercount = document.getElementById('counter');
    innercount.innerHTML = 0;
    counter = 0;
    
}

// scroll button function 
window.onload = ()=> {
    startTime();
    var mybutton = document.getElementById("myBtn");
    window.onscroll = () => {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }





 
