/*const myLabel = document.getElementById("myLabel");

update();
setInterval(update,1000);// this is to update the upadte function after 1000 milliseconds 
 
function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);
    /**
     * 
     * @returns hour
     */
   /* function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = (hours >= 12) ? "pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}: ${minutes}: ${seconds}: ${amOrPm}`;
    }
    function formatZeroes(time){
        time = time.toString();
        return (time.length < 2 )? "0" + time : time;
    }
};*/ 
/*const promise = new Promise((resolve,reject)=>{
    let fileloaded = false;
    if (fileloaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
promise.then(value => console.log(value))
        .catch(error => console.log(error));*/
/*const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myButton.addEventListener("click",()=>{
   if(myImage.style.visibility  == "hidden"){
        myImage.style = "visible";
   } 
   else{
        myImage.style.visibility = "hidden";
   }
})*/

/*const myButton = document.querySelector("#myButton");
const myAnimation = document.querySelector("#myDiv");
myButton.addEventListener("click",()=>{
    let timerID = null;
 
    timerID = setInterval(frame, 5);
    function frame(){
        if(){
            clearInterval(timerID);
        }
        else{
            degrees+= 5;
            x+= 1;
            y+= 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)" ;
        }
    }
    
});*/

/*let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

// Dessiner les cercles aux coins supérieurs (but)
context.beginPath();
context.arc(0, 0, 10, 0, 2 * Math.PI);
context.arc(500, 0, 10, 0, 2 * Math.PI);
context.fill();

// Dessiner les cercles aux coins inférieurs
context.beginPath();
context.arc(0, 500, 10, 0, 2 * Math.PI);
context.arc(500, 500, 10, 0, 2 * Math.PI);
context.fill();*/
