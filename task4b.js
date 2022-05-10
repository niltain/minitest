function calculate () {
let num1 = document.getElementById('num1').value
let num2 = document.getElementById('num2').value
    let square= num1*num1
    let pow = Math.pow(num1,num2)

    document.getElementById("result").innerHTML = " square of a : " + square.toFixed(2) +
        "<br> a^b: " + pow.toFixed(2)
}