const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");

const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener("click", () => {
  mostrarMaisProjetos();
  esconderBotao();
});

function mostrarMaisProjetos(){
  projetosInativos.forEach((projetosInativo) => {
    projetosInativo.classList.add('ativo');
  });
}

function esconderBotao(){
  botaoMostrarProjetos.classList.add("remover");
}