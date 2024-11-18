function abrirModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function fecharModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function receber() {
  var nums = [], soma = 0;

  for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt(`Digite o ${i + 1}º valor:`));
    nums.push(num);
    soma += num;
  }

  document.getElementById('arraySoma').textContent = `Vetor com os valores: ${nums.join(", ")}`;
  document.getElementById('soma').textContent = `A soma dos valores é: ${soma}`;
}

function iniciarOrdemAlfabetica() {
  var palavras = [];

  for (var i = 0; i < 4; i++) {
    var palavra = prompt(`Digite a ${i + 1}ª palavra:`);
    palavras.push(palavra);
  }

  palavras.sort();
  document.getElementById('resultadoOrdemAlfabetica').textContent = `Vetor com as palavras em ordem alfabética: ${palavras.join(", ")}`;
}

function iniciarOrdemDecrescente() {
  var nums = [];

  for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt(`Digite o ${i + 1}º valor:`));
    nums.push(num);
  }

  nums.sort((a, b) => b - a);
  document.getElementById('resultadoOrdemDecrescente').textContent = `Vetor com os números em ordem decrescente: ${nums.join("; ")}`;
}

function iniciarMaiorElemento() {
  var palavras = [], maior = "";

  for (var i = 0; i < 5; i++) {
    var palavra = prompt(`Digite a ${i + 1}ª palavra:`);
    palavras.push(palavra);

    if (palavra.length > maior.length) {
      maior = palavra;
    }
  }

  document.getElementById('arrayMaiorElemento').textContent = `Vetor com as palavras recebidas: ${palavras.join(", ")}`;
  document.getElementById('resultadoMaiorElemento').textContent = `A maior palavra é: ${maior}, com ${maior.length} caracteres.`;
}

function exibirLinguagens() {
  var array1 = [], array2 = [], array3 = [];

  for (var i = 0; i < 6; i++) {
    array1.push(prompt(`Array 1 - Digite o ${i + 1}º elemento:`));
    array2.push(prompt(`Array 2 - Digite o ${i + 1}º elemento:`));
    array3.push(prompt(`Array 3 - Digite o ${i + 1}º elemento:`));
  }

  document.getElementById("array1").innerHTML = `<pre>${array1.join("\n")}</pre>`;
  document.getElementById("array2").innerHTML = `<pre>${array2.join("\n")}</pre>`;
  document.getElementById("array3").innerHTML = `<pre>${array3.join("\n")}</pre>`;

  var array4 = array1.concat(array2, array3);
  document.getElementById("array4").innerHTML = `<pre>${array4.join("\n")}</pre>`;
}

function iniciarSomaExcedendo() {
  var nums = [], soma = 0;

  for (var i = 0; i < 3; i++) {
    var num = parseInt(prompt(`Digite o ${i + 1}º valor:`));
    nums.push(num);
    soma += num;
  }

  document.getElementById('arraySomaExcedendo').textContent = `Vetor com os valores recebidos: ${nums.join("; ")}`;

  if (soma > 100) {
    var maior = Math.max(...nums);
    document.getElementById('resultadoSomaExcedendo').textContent = `A soma dos números é ${soma}, que excede 100. O maior valor é: ${maior}`;
  } else {
    var menor = Math.min(...nums);
    document.getElementById('resultadoSomaExcedendo').textContent = `A soma dos números é ${soma}, que não excede 100. O menor valor é: ${menor}`;
  }
}

function iniciarTabela() {
  var matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

  matriz.forEach(function(linha, i) {
    linha.forEach(function(_, j) {
      matriz[i][j] = parseFloat(prompt(`Digite o valor da posição [${i}][${j}]:`));
    });
  });

  var tabelaHTML = matriz.map(linha => 
    `<tr>${linha.map(valor => `<td>${valor}</td>`).join("")}</tr>`
  ).join("");
  
  document.getElementById('arrayTabela').innerHTML = `<table border="1">${tabelaHTML}</table>`;

  var soma = matriz.flat().reduce((acc, val) => acc + val, 0);
  document.getElementById('soma3x3').innerHTML = `Soma de todos os valores: ${soma}`;
}

function iniciarMultiplicacao() {
  var matriz = [
    [parseFloat(document.querySelector('#input00').value), parseFloat(document.querySelector('#input01').value), parseFloat(document.querySelector('#input02').value)],
    [parseFloat(document.querySelector('#input10').value), parseFloat(document.querySelector('#input11').value), parseFloat(document.querySelector('#input12').value)],
    [parseFloat(document.querySelector('#input20').value), parseFloat(document.querySelector('#input21').value), parseFloat(document.querySelector('#input22').value)]
  ];

  var multiplicador = parseFloat(document.querySelector('#multiplicador').value);

  var novaMatriz = matriz.map(linha => linha.map(valor => valor * multiplicador));

  var tabelaHTML = novaMatriz.map(linha => 
    `<tr>${linha.map(valor => `<td>${valor}</td>`).join("")}</tr>`
  ).join("");

  document.getElementById('resultado').innerHTML = `<h2>Nova Matriz</h2><table border="1">${tabelaHTML}</table>`;
}

function iniciarMaiorValor3x3() {
  var matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

  matriz.forEach(function(linha, i) {
    linha.forEach(function(_, j) {
      matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]:`));
    });
  });

  var tabelaHTML = matriz.map(linha => 
    `<tr>${linha.map(valor => `<td>${valor}</td>`).join("")}</tr>`
  ).join("");
  
  document.getElementById('arrayMaiorValor3x3').innerHTML = `<table border="1">${tabelaHTML}</table>`;

  var maiorValor = Math.max(...matriz.flat());
  document.getElementById('maiorValor3x3').innerText = `Maior valor: ${maiorValor}`;
}

function iniciarTiposDeValores3x3() {
  var matriz = Array.from({ length: 3 }, () => Array(3).fill(''));

  matriz.forEach(function(linha, i) {
    linha.forEach(function(_, j) {
      var valor = prompt(`Digite o valor para a posição [${i}][${j}]:`);
      matriz[i][j] = isNaN(valor) ? valor : parseFloat(valor);
    });
  });

  var tabelaHTML = matriz.map(linha => 
    `<tr>${linha.map(valor => `<td>${valor}</td>`).join("")}</tr>`
  ).join("");
  
  document.getElementById('arrayTiposDeValores3x3').innerHTML = `<table border="1">${tabelaHTML}</table>`;

  var tiposHTML = matriz.flat().map(valor => `<li>${valor}: ${typeof valor}</li>`).join("");
  document.getElementById('tiposDeValores3x3').innerHTML = `<h2>Tipos de Valores:</h2><ul>${tiposHTML}</ul>`;
}

function iniciarParImpar() {
  const numeros = [2, 3, 6, 7, 10, 13, 220, 19];
  const resultado = numeros.map(num => (num % 2 === 0 ? 'par' : 'ímpar'));
  document.getElementById('parImpar').innerHTML = resultado.join(', ');
}

function iniciarMaior10() {
  const numeros = [5, 125, 9, 201, 3, 30, 145, 500, 2, 27];
  const resultado = numeros.filter(num => num > 10).sort((a, b) => b - a);
  document.getElementById('Maior10').innerHTML = resultado.join(', ');
}

function iniciarProdutos() {
  const produtos = [
    { nome: 'Caneta esferográfica', preco: 6.99 },
    { nome: 'Kit de lápis coloridos', preco: 19.99 },
    { nome: 'Lápis', preco: 1.99 },
    { nome: 'Caderno', preco: 29.99 }
];

const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
const maisCaro = produtos.reduce((acc, produto) => (produto.preco > acc ? produto.preco : acc), 0);
const maisBarato = produtos.reduce((acc, produto) => (produto.preco < acc ? produto.preco : acc), produtos[0].preco);

document.getElementById('produtos').innerHTML = `
    Total: R$ ${total.toFixed(2)}, Mais Caro: R$ ${maisCaro}, Mais Barato: R$ ${maisBarato}
`;
}

function abrirModalLista4Bimestre4() {
  document.getElementById("modal-lista4-bimestre4").style.display = "block";
}

function fecharModalLista4Bimestre4() {
  document.getElementById("modal-lista4-bimestre4").style.display = "none";
}

var notas = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0], 
  [0, 0, 0],
  [0, 0, 0]
];

function salvarNotas() {

  notas[0][0] = parseFloat(document.getElementById('notaLPAluno1').value);
  notas[1][0] = parseFloat(document.getElementById('notaLPAluno2').value);
  notas[2][0] = parseFloat(document.getElementById('notaLPAluno3').value);
  notas[3][0] = parseFloat(document.getElementById('notaLPAluno4').value);
  notas[4][0] = parseFloat(document.getElementById('notaLPAluno5').value);

  notas[0][1] = parseFloat(document.getElementById('notaDJWAluno1').value);
  notas[1][1] = parseFloat(document.getElementById('notaDJWAluno2').value);
  notas[2][1] = parseFloat(document.getElementById('notaDJWAluno3').value);
  notas[3][1] = parseFloat(document.getElementById('notaDJWAluno4').value);
  notas[4][1] = parseFloat(document.getElementById('notaDJWAluno5').value);

  notas[0][2] = parseFloat(document.getElementById('notaOSAAluno1').value);
  notas[1][2] = parseFloat(document.getElementById('notaOSAAluno2').value);
  notas[2][2] = parseFloat(document.getElementById('notaOSAAluno3').value);
  notas[3][2] = parseFloat(document.getElementById('notaOSAAluno4').value);
  notas[4][2] = parseFloat(document.getElementById('notaOSAAluno5').value);
}

function calcularMedia(disciplina) {
  var media, resultado;
  var resultadoHTML = "<ul>";
  
  for (var i = 0; i < notas.length; i++) {
      switch (disciplina) {
          case 'LP':
              media = notas[i][0];
              break;
          case 'DJW':
              media = notas[i][1];
              break;
          case 'OSA':
              media = notas[i][2];
              break;
          case 'Geral':
              media = (notas[i][0] + notas[i][1] + notas[i][2]) / 3;
              break;
          default:
              break;
      }

      if (media >= 6) {
          resultado = 'Aprovado';
      } else if (media >= 4 && media < 6) {
          resultado = 'Recuperação';
      } else {
          resultado = 'Reprovado';
      }

      resultadoHTML += "<li>Aluno " + (i + 1) + ": Média de " + disciplina + " = " + media.toFixed(2) + " - " + resultado + "</li>";
  }

  resultadoHTML += "</ul>";
  document.getElementById('notasSalvas').innerHTML = resultadoHTML;
}

function escolherDisciplina() {
  salvarNotas();

  var escolhaValida = false;
  var disciplina;

  while (!escolhaValida) {
      disciplina = prompt("Escolha uma disciplina entre LP, DJW e OSA ou 'Geral' para a média geral.");

      if (disciplina === 'LP' || disciplina === 'DJW' || disciplina === 'OSA' || disciplina === 'Geral') {
          escolhaValida = true;
          calcularMedia(disciplina);
      } else {
          alert("Escolha inválida! Tente novamente.");
      }
  }
}
function abrirModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = "block";
}

function fecharModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = "none";
}


function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablink");

  Array.from(tabcontent).forEach(tab => tab.style.display = "none");
  Array.from(tablinks).forEach(link => link.className = link.className.replace(" active", ""));

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.tablink').click();
});
