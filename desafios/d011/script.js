var res = window.document.getElementById('res')

function verificar(){
    var ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    
    if (ano%4==0){//etapa 1, se não vai para a etapa 5 (não é)
        if(ano%100==0){//etapa 2, se não etapa 4 (é bi)
            if(ano%400==0){//etapa 3, se não etapa 5 (não é)
                res.innerHTML=`<h1>Analisando o ano de ${ano}...</h1><p>O ano de ${ano} <mark id='bissexto'><strong>É BISSEXTO</strong></mark>&#x2714;</p>`
            } else {
                res.innerHTML=`<h1>Analisando o ano de ${ano}...</h1><p>O ano de ${ano} <mark id='naobissexto'><strong>NÃO É BISSEXTO</strong></mark>&#x274C;</p>`
            }
        } else {
            res.innerHTML=`<h1>Analisando o ano de ${ano}...</h1><p>O ano de ${ano} <mark id='bissexto'><strong>É BISSEXTO</strong></mark>&#x2714;</p>`
        } 
    } else {
        res.innerHTML=`<h1>Analisando o ano de ${ano}...</h1><p>O ano de ${ano} <mark id='naobissexto'><strong>NÃO É BISSEXTO</strong></mark>&#x274C;</p>`
    }

     
}   


