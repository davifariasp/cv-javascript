var res = window.document.getElementById('res')

function verifica(){
    var preco_ant= Number(window.prompt('Qual era o preço anterior do produto?'))
    var preco_atual= Number(window.prompt('Qual é o preço atual do produto?'))

    var dif = 0
    var vari = 0

    if(preco_atual>preco_ant){
        dif = preco_atual-preco_ant

        vari =  (100*dif)/preco_ant

        res.innerHTML=`<p>O produto custava ${preco_ant.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} e agora custa ${preco_atual.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}.</p>

        <p>Hoje o produto está mais caro</p>
        
        <p>O preço subiu ${dif.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} em relação ao preco anterior.</p>
        
        <p>Uma variação de ${vari}% para cima.</p>`
    } else {

        dif = preco_ant-preco_atual

        vari =  (100*dif)/preco_ant

        res.innerHTML=`<p>O produto custava ${preco_ant.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} e agora custa ${preco_atual.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}.</p>

        <p>Hoje o produto está mais barato</p>
        
        <p>O preço diminuiu ${dif.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} em relação ao preco anterior.</p>
        
        <p>Uma variação de ${vari}% para baixo.</p>`
    }
}