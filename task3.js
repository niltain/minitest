let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')


document.getElementById('nhan').onclick = function () {
    result()
}

function result() {

    document.getElementById("result").innerHTML = "Result: " + parseInt(num1.value) * parseInt(num2.value);
}