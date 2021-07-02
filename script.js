let nome = document.querySelector('#nome');
let oi = document.querySelector('#oi');

function éoClicas() {
    if ( nome.value == `727`) {
        oi.innerHTML = `WYSI`
    }
    else {oi.innerHTML = `Olá ${nome.value}, seja bem-vindo(a)!`;}
}

let nomep = document.querySelector(`#nomep`);
let nomej = document.querySelector(`#nomej`);
let raça = document.querySelector(`#raça`);
let profissão = document.querySelector(`#profissão`);
let idade = document.querySelector(`#idade`);
let aparência = document.querySelector(`#aparência`);
let história = document.querySelector(`#história`);
let personagem = document.querySelector(`#personagem`);

function pronto(){
    personagem.innerHTML =`Olá ${nomej.value}, muito obrigado por usar o criador de personagem do site.
    Seu personagem se chama ${nomep.value}, um ${raça.value} que possui ${idade.value} anos de idade,
    ele se parece como ${aparência.value}. Ele trabalha como ${profissão.value}, a história dele é:
    ${história.value}`
}