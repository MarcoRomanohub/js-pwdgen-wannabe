console.log('esercizio "password generator"');

// 1
const nomeUtente = prompt ('Inserisci il tuo nome');
console.log(nomeUtente);
// 2
const cognomeUtente = prompt ('Inserisci il tuo cognome');
console.log(cognomeUtente);
// 3
const colorePreferito = prompt ('Colore preferito?');
console.log(colorePreferito);
// 4
const numero = 24;
console.log(numero);
// 5
const password = nomeUtente + cognomeUtente + colorePreferito + numero
console.log('password =', password);
// 6
document.getElementById('password').innerHTML = `
<span> password =  <strong> ${password} </strong> </span>
`