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
