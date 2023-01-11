document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        let num1 = parseInt(document.getElementById("textbox1").value);
        let num2 = parseInt(document.getElementById("textbox2").value);

        console.log( num1 + num2);
        document.getElementById("textboxAnswer").value = num1 + num2;
    });
});

