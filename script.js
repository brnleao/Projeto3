function Calcular(){
    //Declarando as váriaveis
    let num1 = parseFloat(document.getElementById("num1").value); //document.getElementById --> seria o dom
    let num2 = parseFloat(document.getElementById("num2").value); //O dom serve para manipular os elementos, nesse caso num1 e num2

    document.getElementById("resultado").innerHTML = num1 * num2; //innerHTML -> passa o valor para o HTML
}