//buscar API


fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response => {
    return response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("dolar").value = economia.USDBRL.bid; 
    
})

function calculeDolar() { 

    var valorDolar = document.getElementById("dolar").value;
    var valorProduto = parseFloat(document.getElementById("valor").value);
    // document.getElementById("valor").value = 500;
    // var valorProduto = document.getElementById("valor").value;
    var result = ((valorProduto * valorDolar));
    
    if (valorProduto > 0) {
            document.getElementById("real").value = result;
    }
    
}


function calculeDolar1() { 

    var valorDolar1 = document.getElementById("dolar").value;
    var valorProduto1 = parseFloat(document.getElementById("precoProduto1").value);

    var result1 = ((valorProduto1 * valorDolar1));

    const xRounded = + (result1.toFixed(2))
    document.getElementById('resultadoConta1').innerHTML = xRounded;

    if (valorProduto1 > 0) { 
        document.getElementById("resultadoConta1").value = xRounded;
    }
    
}




function calculeDolar2() { 

    var valorDolar2 = document.getElementById("dolar").value;
    var valorProduto2 = parseFloat(document.getElementById("precoProduto2").value);

    var result2 = ((valorProduto2 * valorDolar2));

    const xRounded = +(result2.toFixed(2))
    document.getElementById('resultadoConta1').innerHTML = xRounded;
    
    if (valorProduto2 > 0) {
        document.getElementById("resultadoConta2").value = xRounded;
    }
    
}

function calculeDolar3() { 

    var valorDolar3 = document.getElementById("dolar").value;
    var valorProduto3 = parseFloat(document.getElementById("precoProduto3").value);

    var result3 = ((valorProduto3 * valorDolar3));

    const xRounded = +(result3.toFixed(2))
    document.getElementById('resultadoConta1').innerHTML = xRounded;
    
    if (valorProduto3 > 0) {
        document.getElementById("resultadoConta3").value = xRounded;
    }
    
}
