let tarefas = [];

const inputTarefa = document.getElementById('novaTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

btnAdicionar.addEventListener('click', () => {
  const descricao = inputTarefa.value.trim();
  if (descricao === '') return;

  const novaTarefa = {
    descricao: descricao,
    status: false
  };

  tarefas.push(novaTarefa);
  inputTarefa.value = '';
  atualizarLista();
});

function atualizarLista() {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefas[index].status = checkbox.checked;
      atualizarLista();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? 'tarefa-concluida' : 'tarefa-nao-concluida';

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTarefas.appendChild(li);
  });
}
