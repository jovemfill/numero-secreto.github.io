alert('Boas vindas ao número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let nome = prompt('Como se chama?');
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`De 0 a ${numeroMaximo}, qual o número?`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Boa, ${nome}! Vc achou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*if (tentativas > 1) {
    alert(`Boa, ${nome}! Vc achou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Boa, ${nome}! Vc achou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/

