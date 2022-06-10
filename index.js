
let inputPergunta=document.getElementById("inputPergunta")
let  botaoFazerPergunta=document.getElementById("botaoFazerPergunta")
let pergunta = document.getElementById("pergunta")
let  retornoResposta=document.getElementById("resposta")
const  resposta = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]
const GerarNumero = (resposta)=>{
      const quantidadeResposta= resposta.length
      const numeroAleatorio= Math.floor(Math.random()*quantidadeResposta)
      return numeroAleatorio
  
} 
  
const PerguntaVazia=(inputPergunta) =>{
      if(inputPergunta.value == ""){
          return true
      }
  
}
  
const Resposta=()=>{
      pergunta.innerHTML=inputPergunta.value
      retornoResposta.innerHTML =`${resposta[GerarNumero(resposta)]}`
      return
}
  
const LimpaResposta= ()=>{
      setTimeout(function() {
          pergunta.style.opacity = 0;
          retornoResposta.style.opacity = 0;
          botaoFazerPergunta.removeAttribute("disabled")
        }, 3000)
        retornoResposta.style.opacity = 1;
        pergunta.style.opacity = 1;
        return
        
}
const FazerPergunta=()=>{
          if (PerguntaVazia(inputPergunta)){
              alert("Digite sua pergunta!!")
          }else{
              Resposta()
              
              botaoFazerPergunta.setAttribute("disabled", true)
              setTimeout
              LimpaResposta()
              
          }
          
          
}


