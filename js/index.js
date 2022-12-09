//Selecting all buttons
var numberOfButtons = document.querySelectorAll(".drum") 
   

//adding eventLister to all button one by one.
for (var i = 0; i < numberOfButtons.length; i++) {              

    //event listerner added sucessfully 
    numberOfButtons[i].addEventListener("click", clickHandle );  
    // numberOfButtons[i].addEventListener("keypress", clickHandle ); 
    
    
}

//execute this function when button click 
function clickHandle() {                                         
    
   makeSound(this.innerHTML);
}

// this is for keypress events.
document.addEventListener("keypress", keypressHandle)

// execute when keypressed by keyborad
function keypressHandle(event) {
    makeSound(event.key)
}
 
//Sounds for keypress and button clicks
 function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default:
        
    }
}

var audio = new Audio("sounds/carryadder.mp3")
audio.play();
