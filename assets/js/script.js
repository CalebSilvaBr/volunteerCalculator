function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Insira um valor positivo!");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var pinterest = principal * years * rate / 100;
    var interest = parseFloat(principal) + pinterest
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "Se você investir " + "<span style='font-weight:bold'>" + "R$" + principal + "</span>" + ", a uma taxa de "+ "<span style='font-weight:bold'>" + rate + "</span>%." + "<br> Você terá o valor de " + "<span style='font-weight:bold'>" + "R$" + interest + "</span>" + ", no ano de " + "<span style='font-weight:bold'>" + yearNow + "</span>.";
}

function compute2()
{
    var principal2 = document.getElementById("principal2").value;

    if(principal2 == "")
    {
        alert("Insira um valor!");
        document.getElementById("principal2").focus();
        return;
    }
    var monthly2 = document.getElementById("monthly2").value;

    var rate2 = document.getElementById("rate2").value/100;
    var rate100 = rate2*100
    if(rate2 == "" || rate2 <= 0)
    {
        alert("Insira um valor positivo!");
        document.getElementById("rate2").focus();
        return;
    }

    var monthrate = (1+rate2)**(1/12)-1;
    var years2 = document.getElementById("years2").value;
    var monthinterest2 = monthly2*(((1+ monthrate)**(12*years2)-1)/(monthrate));
    
    var principal2interest = principal2 * ((1+rate2)**years2);
    var interest2 = monthinterest2 + principal2interest
    var interest2 = interest2.toFixed(2)

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years2);
    
    var resultDisplay = document.getElementById("result2");
    resultDisplay.innerHTML = "Se você investir " + "<span style='font-weight:bold'>" + "R$" + principal2 + "</span>"  + ", a uma taxa de "+ "<span style='font-weight:bold'>" + rate100 + "</span>%" + ", com aportes mensais de " + "<span style='font-weight:bold'>" + "R$" + monthly2 + "</span>" + "<br> Você terá o valor de " + "<span style='font-weight:bold'>" + "R$" + interest2 + "</span>" + ", no ano de " + "<span style='font-weight:bold'>" + yearNow + "</span>.";
}

function jurSimples() 
{
var montante = document.getElementById("montante").value;
var numeroParcelas = document.getElementById("numeroParcelas").value;
var valorParcelas = document.getElementById("valorParcelas").value;
var jurostotais = (numeroParcelas*valorParcelas);
var taxaTotal = (jurostotais-montante)/(montante/100);
var taxaMensal = taxaTotal/numeroParcelas;
var taxaAnual = taxaMensal*12;

var resultDisplay = document.getElementById("resultJur");
resultDisplay.innerHTML = "Montante: " + montante + ", Número de Parcelas: " + numeroParcelas + ", Valor das Parcelas:" + valorParcelas + ", Juros Totais: " + jurostotais + ", Taxa Total de Juros: " + taxaTotal + ", Taxa mensal de juros: " + taxaMensal + ", Taxa Anual de juros: " + taxaAnual;
}

function onePlusone()
{
var montantePrim = document.getElementById("nmontanteA").value;
var nparcelas = document.getElementById("nnumeroParcelas").value;
var taxaMes = document.getElementById("ntaxaMes").value;
var valorparcelas = document.getElementById("nvalorParcelas").value;

if (valorparcelas == "" && nparcelas == "" && montantePrim == "" && taxaMes == ""){
    alert("Preencha os campos, deixando um vazio.");
    return;
}

if (valorparcelas != "" && nparcelas != "" && montantePrim != "" && taxaMes != ""){
    alert("Deixe a variável que gostaria de saber vazia.");
    return;
}
if (taxaMes == ""){
    nparcelas = parseFloat(nparcelas);
    montantePrim = parseFloat(montantePrim);
    valorparcelas = parseFloat(valorparcelas);

    let total = nparcelas*valorparcelas;
    let newtaxaMes = 100*((total-montantePrim)/montantePrim)/nparcelas;
    var results = document.getElementById("nresultone")
    results.innerHTML = "Se você pegar um empréstimo de: " + montantePrim + ". Você pagará o montante total de: " + total + ", a uma taxa mensal de: " + newtaxaMes + ".";
}

}
