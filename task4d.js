function task4d () {
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let c = document.getElementById("third").value

    if (a >= b + c || b >= a + c || c >= a + b) {
        document.getElementById("result").innerHTML = "đây kp hình tam giác"
    } else if (a * a == b * b + c * c) {
        document.getElementById("result").innerHTML = "tam giác vuông"
    } else if (a == b == c) {
        document.getElementById("result").innerHTML = "tam giác cân"
    }
}