var res = window.document.getElementById('res')

function entrar(){
    var nome = window.prompt('Qual o nome do aluno(a)')
    var n1 = Number(window.prompt(`Qual a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Qual a segunda nota de ${nome}?`))

    var media = (n1+n2)/2

    if(media>6){
        res.innerHTML=`<h2>Analisando a situação de ${nome}</h2>
        <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong>.</p>
        <p>Com a média acima de 6,0 o aluno está <mark id="aprovado">APROVADO</mark></p>`
    } else if (media>=3 && media<=6){
        res.innerHTML=`<h2>Analisando a situação de ${nome}</h2>
        <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong>.</p>
        <p>Com a média entre 3,0 e 6,0 o aluno está <mark id="recuperacao">DE RECUPERAÇÃO</mark></p>`
    } else {
        res.innerHTML=`<h2>Analisando a situação de ${nome}</h2>
        <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong>.</p>
        <p>Com a média abaixo de 3 o aluno está <mark id="reprovado">REPROVADO</mark></p>`
    }
}