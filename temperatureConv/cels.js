let submitBut = document.getElementById("submitButton")
let cButton =document.getElementById("cButton")
let fButton =document.getElementById("fButton")
let tempLabel = document.getElementById("tempLabel")
let textBox = document.getElementById("textBox")


submitBut.addEventListener("click",(event)=>{
    if(textBox.value != ""){
        let temp = 0
        if (fButton.checked){
            temp = Number(textBox.value)
            temp = toFahrenheit(temp)
            tempLabel.textContent = temp +"°F"
        }
        else if (cButton.checked){
            temp = Number(textBox.value)
            temp = toCelsius(temp)
            tempLabel.textContent = temp +"°C"
        }
        
    }
    else{
        event.stopPropagation();
        tempLabel.textContent= "Something went wrong. Try again"
    }
})
/**
 * 
 * @param {number} temp : the temeprature given  by the user
 * @returns the temperature in Celsius
 */

function toCelsius(temp){
    return (temp - 32 )*(5/9)
}
/**
 * 
 * @param {number} temp 
 * @returns
 */
function toFahrenheit(temp){
    return (temp * 9/5) + 32
}