

function calculate(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let option = document.getElementById("option").value;
    if (option == "+"){
        let total = parseInt(first) + parseInt(second);
        return total
    } else if (option == "-"){
       let total = parseInt(first) - parseInt(second);
    } else if (option == "*"){
        let total = parseInt(first) * parseInt(second);
    } else if (option == "/") {
        let total = parseInt(first) / parseInt(second);
    }
    alert(total)
}