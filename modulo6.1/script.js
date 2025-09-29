let curtidas = [];

const input = document.getElementById('nomeInput');
const botao = document.getElementById('btnCurtir');
const mensagem = document.getElementById('mensagemCurtidas');

botao.addEventListener('click', () => {
  const nome = input.value.trim();
  if (nome === '') return;

  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
  }

  atualizarMensagem();
  input.value = '';
});

function atualizarMensagem() {
  const total = curtidas.length;

  if (total === 0) {
    mensagem.textContent = 'Ninguém curtiu';
  } else if (total === 1) {
    mensagem.textContent = `${curtidas[0]} curtiu`;
  } else if (total === 2) {
    mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
  }
}
