const produtosSelecionados = document.getElementById("produto");
const quantidadeDeProdutos = document.getElementById("quantidade");
const listaProdutos = document.getElementById("listaProdutos");
const valorTotal = document.getElementById("valorTotal");

let total = 0
function Adicionar() {
    const produtoTexto = produtosSelecionados.value; // Ex: "Celular - R$1400"
    const quantidade = parseInt(quantidadeDeProdutos.value);
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }
  
    // Separa o nome e o valor
    const [nomeProduto, valorTexto] = produtoTexto.split(" - R$");
    const valorUnitario = parseFloat(valorTexto);
  
    const subtotal = valorUnitario * quantidade;
    total += subtotal;
  
    // Cria o elemento do produto no carrinho
    const novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>`;
  
    listaProdutos.appendChild(novoProduto);
    atualizarTotal();
    quantidadeDeProdutos.value = ""; // limpa o campo quantidade
  }
  
  function Limpar() {
    listaProdutos.innerHTML = ""; // limpa a lista de produtos
    total = 0;
    atualizarTotal();
  }
  
  function atualizarTotal() {
    valorTotal.textContent = `R$${total}`;
  }
  window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('produto');
    const optionsArray = Array.from(select.options);
    optionsArray.sort((a, b) => a.text.localeCompare(b.text));
    select.innerHTML = '';
    optionsArray.forEach(option => select.appendChild(option));
});