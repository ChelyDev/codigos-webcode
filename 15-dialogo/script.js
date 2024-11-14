//exibir mensagem simples para o usuário:
//alert("Essa é a minha mensagem para o usuário")

//permite o usuário escolher entre cancelar (false) e ok (true):
//let escolha = confirm("Deseja realmente continuar?")
//if(escolha){
  //  alert("Você apertou em OK")
//}else{
  //  alert("Você cancelou seu vagabundo noia")
//}

//permite receber uma entrada de texto do usuário
//let nome = prompt("Qual o seu nome?")
//let idade = prompt("Qual sua idade?")

let idade = prompt("Qual sua idade?")
let idadeInt= parseInt(idade)
alert(idadeInt + 1)

let peso = prompt("Qual seu peso?")
let pesoFloat= parseFloat(peso)
alert(pesoFloat * 10)

let saldoConta = prompt("Qual valor você tem guardado no banco?")
let saldo=Number(saldoConta)
alert (saldo)

//se passar uma string o resultado é NaN = Not a Number