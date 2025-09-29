const descricaoInput = document.getElementById('descricao');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.className = 'tarefa';

    const divInfo = document.createElement('div');
    divInfo.className = 'tarefa-info';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      salvarTarefas();
      renderizarTarefas();
    });

    const spanDescricao = document.createElement('span');
    spanDescricao.textContent = tarefa.descricao;
    spanDescricao.className = tarefa.status ? 'descricao concluida' : 'descricao';

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.className = 'btn-excluir';
    btnExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefas();
    });

    divInfo.appendChild(checkbox);
    divInfo.appendChild(spanDescricao);
    li.appendChild(divInfo);
    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

btnAdicionar.addEventListener('click', () => {
  const texto = descricaoInput.value.trim();
  if (texto === '') return;

  tarefas.push({ descricao: texto, status: false });
  salvarTarefas();
  renderizarTarefas();
  descricaoInput.value = '';
});

renderizarTarefas();
