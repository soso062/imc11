let btn = document.getElementById("resultado");

btn.addEventListener("click", function imc(){
   let peso = Number(document.getElementById("peso").value);
   let altura = Number(document.getElementById("altura").value);
   let result = document.getElementById("total")

   result.textContent = peso / (altura * altura);
})