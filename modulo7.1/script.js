let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];

const input = document.getElementById('nomeInput');
const botaoCurtir = document.getElementById('btnCurtir');
const botaoLimpar = document.getElementById('btnLimpar');
const mensagem = document.getElementById('mensagemCurtidas');

atualizarMensagem();

botaoCurtir.addEventListener('click', () => {
  const nome = input.value.trim();
  if (nome === '') return;

  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
    localStorage.setItem('curtidas', JSON.stringify(curtidas));
  }

  input.value = '';
  atualizarMensagem();
});

botaoLimpar.addEventListener('click', () => {
  curtidas = [];
  localStorage.removeItem('curtidas');
  atualizarMensagem();
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
