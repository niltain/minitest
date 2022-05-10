function calculate () {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let Sum= parseInt(num1)+ parseInt(num2)
    document.getElementById("result").innerHTML = " Sum of a and b  : " + Sum
}