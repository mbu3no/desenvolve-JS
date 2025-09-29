const campoBusca = document.getElementById('campoBusca');
const btnBuscar = document.getElementById('btnBuscar');
const listaUsuarios = document.getElementById('listaUsuarios');
const mensagem = document.getElementById('mensagem');

btnBuscar.addEventListener('click', async () => {
  const termo = campoBusca.value.trim();
  if (termo === '') return;

  listaUsuarios.innerHTML = '';
  mensagem.textContent = 'Carregando...';

  try {
    const resposta = await fetch(`https://api.github.com/search/users?q=${termo}`);
    const dados = await resposta.json();

    if (dados.items && dados.items.length > 0) {
      mensagem.textContent = '';
      dados.items.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'usuario';

        li.innerHTML = `
          <img src="${usuario.avatar_url}" alt="${usuario.login}">
          <a href="${usuario.html_url}" target="_blank">${usuario.login}</a>
        `;

        listaUsuarios.appendChild(li);
      });
    } else {
      mensagem.textContent = 'Não foram encontrados usuários para esta pesquisa';
    }

  } catch (erro) {
    mensagem.textContent = 'Erro ao buscar usuários 😕';
  }
});
