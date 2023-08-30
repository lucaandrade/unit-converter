/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Grab our elements in the page
const numberInput = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")

const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liter-gallon")
const kilogramsPounds = document.getElementById("kilo-pound")

convertButton.addEventListener('click', function(){
    convert(Number(numberInput.value)) // Here we are calling the convert function and passing numberInput as argument
})

function convert(x) {
    let feet = (x * 3.281).toFixed(3)
    let meter = (x / 3.281).toFixed(3)
    let gallon = (x * 0.264).toFixed(3)
    let liter = (x / 0.264).toFixed(3)
    let pound = (x * 2.204).toFixed(3)
    let kilogram = (x / 2.204).toFixed(3)

    meterFeet.textContent = `${x} meters = ${feet} feet | ${x} feet = ${meter} meters`
    litersGallons.textContent = `${x} liters = ${gallon} gallons | ${x} gallons = ${liter} liters`
    kilogramsPounds.textContent = `${x} kilos = ${pound} pounds | ${x} pounds = ${kilogram} kilos`
}
