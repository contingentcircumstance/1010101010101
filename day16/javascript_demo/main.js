console.log ("Hello world")

let a=2;
let b=3;

let c= a + b; 

let myName= "milo"


console.log(c);
console.log (myName)

for(let i=0; i < 100; i++) {
    console.log(i);
}

//store a reference to myButton in Javascript

let MyButton= document.getElementById("myButton")

//add an event listener that listens for when the user clicks on the button 

MyButton.addEventListener("click", function (){

    console.log ("button was clicked")

    let myCircle= document.getElementById ("myCircle")

    myCircle.style.backgroundColor="orangered";
}) 