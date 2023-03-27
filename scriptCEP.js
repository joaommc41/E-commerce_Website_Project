//preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {

    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    
    
    var estado = document.getElementById("estado").value = endereco.uf;
    var cidade = document.getElementById("cidade").value = endereco.localidade;
    
        switch (estado) {
    
            //SUDESTE
            case "SP":  
            case "MG":
            case "ES":
            case "RJ":
               document.getElementById("frete").value = "R$10,00";
                
                if (cidade == "Mogi das Cruzes" || cidade == "Guarulhos"){
    
                    document.getElementById("frete").value = "GRATUÍTO!";
                }
                break;
            
            //SUL
            case "RS":
            case "SC":
            case "PR":
                document.getElementById("frete").value = "R$20,00";
            break;
    
            //NORTE
            case "AM":
            case "AC":
            case "RO":
            case "RR":
            case "AP":
            case "PA":
            case "TO":
                document.getElementById("frete").value = "R$55,00";
            break;
    
            //CENTRO-OESTE
            case "GO":
            case "MT":
            case "MS": 
            case "DF":
                document.getElementById("frete").value = "R$40,00";
            break;
    
            //NORDESTE
            case "MA":
            case "PI":
            case "CE":
            case "RN":
            case "PB":
            case "PE":
            case "AL":
            case "SE": 
            case "BA":
                document.getElementById("frete").value = "R$45,00";
            break;
    
            default:
            document.getElementById("frete").value = "Fora do alcance!";  
        }  
    }
    
    //autopreenchimento
    const cepValido = (cep) => {
        if (cep.length = 8) {
            return true;
        } else {
            return false;
        }
    }
    
    //buscar API
    //Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
    const pesquisarCep = async () => {
        const cep = document.getElementById("cep").value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        if (cepValido(cep)) {
            const dados = await fetch(url);
            const endereco = await dados.json();
                preencherFormulario(endereco);
            }
    }
    
    document.getElementById("cep").addEventListener("focusout", pesquisarCep);
    

    






