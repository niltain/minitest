function task4a (){
let canhA = document.getElementById("value").value
let perimeter = (canhA * 4)
let square = Math.pow(canhA, 2)
document.getElementById("result").innerHTML = "Chu vi hình vuông là : " + perimeter.toFixed(2) +
    "m<br>Diện tích hình vuông là à: " + square.toFixed(2) + "m<sup>2</sup>"
}