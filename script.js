function buscarCEP(){
    let cep = document.getElementById("cep").value;
    let url = "https://brasilapi.com.br/api/cep/v1/"+cep;

    fetch(url).then(function(dadoscep){ /*buscar na URL e receber os dados*/
        dadoscep.json().then(function(enderecocep){ /*transformar o endereço em json*/
            document.getElementById("rua").value = enderecocep.street;
            document.getElementById("bairro").value = enderecocep.neighborhood;
            document.getElementById("cidade").value = enderecocep.city;
            document.getElementById("estado").value = enderecocep.state;
    

    })
})
}

function searchCNPJ(){
        let cnpj = document.getElementById("cnpj").value;
        let link = "https://brasilapi.com.br/api/cnpj/v1/"+cnpj;
        

fetch(link).then(function(dadoscnpj){
    dadoscnpj.json().then(function(enderecocnpj){
        document.getElementById("nome").value = enderecocnpj.razao_social;
        document.getElementById("road").value = enderecocnpj.logradouro;
        document.getElementById("numero").value = enderecocnpj.numero;
        document.getElementById("bairro2").value = enderecocnpj.bairro;
        document.getElementById("municipio").value = enderecocnpj.municipio;
        document.getElementById("uf").value = enderecocnpj.uf;


    })

})
}