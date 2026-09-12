
const projetos = [
  { id:'estuda', nome:'Estuda+', categoria:'INICIAÇÃO CIENTÍFICA · 2022', curto:'Educação e pesquisa', tags:['Educação','Appy Pie','Pesquisa'], resumo:'Uma plataforma de estudos pensada para estudantes de baixa renda, com atividades e recompensas.', link:'https://drive.google.com/file/d/1uX50ifNTr0a9f9HhQRVkGgF4axABRcC4/view', linkNome:'Ler o resumo estendido', imagens:[
    { src: 'imagens/estuda/foto.jpeg', nome: 'Foto da equipe na feira da PUCPR' }
  ], detalhes:[
    ['Sobre o projeto','O Estuda+ foi desenvolvido em 2022 no Colégio Bom Jesus Aldeia. A proposta surgiu a partir de pesquisas sobre as dificuldades da educação brasileira e buscava apoiar estudantes de baixa renda.'],
    ['Como funcionaria','Professores voluntários publicariam aulas e atividades organizadas por conteúdo. Os alunos receberiam pontos ao realizar exercícios e poderiam trocá-los por materiais escolares e recompensas dentro da plataforma.'],
    ['Desenvolvimento','Utilizamos o Appy Pie para criar um modelo inicial do aplicativo e de sua interface. Também buscamos possíveis parcerias com professores e livrarias.'],
    ['Minha participação','Fui coautor do resumo estendido e participei da elaboração conjunta da proposta, das pesquisas e do desenvolvimento inicial do Estuda+.'],
    ['Menção honrosa na FICEF','O trabalho foi aprovado para a feira de iniciação científica da PUC e para a FICEF de 2022. Na FICEF, recebemos menção honrosa pelo projeto.','award']
  ]},
  { id:'curriculo', nome:'Currículo web', categoria:'DESENVOLVIMENTO WEB', curto:'Apresentação pessoal', tags:['HTML','CSS','JavaScript'], resumo:'Meu perfil, formação e habilidades em uma página pessoal responsiva.', link:'https://github.com/Rodfagnani-dev/curriculo', linkNome:'Ver repositório', imagens:[
    { src: 'imagens/curriculo/image.png', nome: 'Imagem do modelo feito com css e html' }
  ], detalhes:[
    ['Objetivo do projeto','Criar uma página para apresentar meu perfil, formação, habilidades, objetivos profissionais e formas de contato. O projeto utiliza HTML, CSS e JavaScript separados em arquivos próprios, com layout responsivo e identidade visual em preto e verde.'],
    ['Recursos da página','Menu adaptado para celulares, animações durante a navegação, destaque da seção atual e botão para copiar o e-mail. O JavaScript atualiza automaticamente o ano do rodapé, enquanto o CSS oferece uma apresentação adaptada para impressão.'],
    ['Minha participação','Desenvolvi meu currículo para a web, reunindo minhas informações e trabalhando a apresentação do conteúdo e os recursos de interação. Apliquei a integração entre estrutura HTML, estilos CSS e comportamento em JavaScript em uma página pessoal.']
  ]},
  { id:'python', nome:'Exercícios em Python', categoria:'LÓGICA DE PROGRAMAÇÃO', curto:'13 programas acadêmicos', tags:['Python','Algoritmos','Condicionais'], resumo:'Soluções para situações do dia a dia, desenvolvidas na disciplina de Raciocínio Algorítmico.', link:'https://github.com/Rodfagnani-dev/Exerc-cios-Python', linkNome:'Ver repositório', imagens:[
    { src: 'imagens/python/image.png', nome: 'Imagem do modelo de passar imagens' }
  ], detalhes:[
    ['Objetivo do projeto','Praticar os fundamentos de programação na disciplina de Raciocínio Algorítmico. O repositório reúne 12 exercícios numerados e uma calculadora acadêmica de IRPF, totalizando 13 programas executados pelo terminal.'],
    ['Conteúdos praticados','Comparação e ordenação de números, análise de palavras e letras, cálculo de médias, escolha do menor preço e cálculos salariais. Os programas utilizam entrada e saída de dados, variáveis, operadores, listas e decisões com if, elif e else. Os cálculos financeiros pertencem ao contexto dos exercícios.'],
    ['Minha participação','Desenvolvi as soluções em Python, transformando as situações dos exercícios em instruções e condições. Trabalhei a leitura dos valores informados pelo usuário e a apresentação dos resultados, praticando especialmente a definição de regras para cada caso.']
  ]},
  { id:'carrossel', nome:'Carrossel de imagens', categoria:'INTERAÇÃO NA WEB', curto:'Navegação com JavaScript', tags:['HTML','CSS','JavaScript','DOM'], resumo:'Três imagens, dois botões e uma navegação circular para praticar interatividade.', link:'https://github.com/Rodfagnani-dev/Passador-de-Imagens', linkNome:'Ver repositório', imagens:[
    { src: 'imagens/carrossel/image.png', nome: 'Imagem do modelo de passar imagens' }
  ], detalhes:[
    ['Objetivo do projeto','Criar um componente que permita visualizar imagens em sequência. O projeto Passador-de-Imagens utiliza HTML, CSS e JavaScript e apresenta três imagens com os botões Voltar e Avançar.'],
    ['Como funciona','O JavaScript mantém um contador para identificar a imagem selecionada e alterna a classe ativo. A navegação é circular: depois da última imagem, Avançar retorna à primeira; ao voltar a partir da primeira, aparece a última.'],
    ['Minha participação','Desenvolvi o carrossel e sua navegação entre imagens. Organizei os elementos da página e usei eventos de clique, condições e alteração de classes para controlar o que é exibido. A atividade permitiu praticar a manipulação dos elementos HTML pelo JavaScript.']
  ]},
  { id:'prova', nome:'Portal de jogos', categoria:'AVALIAÇÃO DE HTML E CSS', curto:'Interface e colaboração', tags:['HTML','CSS','Grid','Flexbox'], resumo:'Uma página com catálogo de jogos, formulário de preferências e ranking.', link:'https://github.com/Rodfagnani-dev/Prova-exp-site', linkNome:'Ver repositório', imagens:[
  
  ], detalhes:[
    ['Objetivo do projeto','Aplicar conhecimentos de estruturação e estilização em uma página com tema de jogos. O projeto Prova-exp-site apresenta um catálogo com Uncharted, Skyrim, Lego Batman e Minecraft, acompanhado de imagens, descrições e listas de recursos.'],
    ['Estrutura da interface','A página contém cabeçalho com menu, cartões de jogos, formulário de preferências, tabela de ranking e rodapé. O CSS utiliza Grid para organizar o catálogo, Flexbox na distribuição dos elementos e efeitos visuais ao passar o mouse. Trata-se de uma interface estática em HTML e CSS.'],
    ['Minha participação','Participei do desenvolvimento da página durante a avaliação, contribuindo para a entrega do site. A atividade envolveu a aplicação de HTML e CSS em um trabalho colaborativo, reunindo diferentes elementos de uma interface em uma única página.']
  ]}
];


const $ = (id) => document.getElementById(id);
let selecionado = projetos[0];
let aba = 'about';

function elemento(tag, classe, texto) {
  const item = document.createElement(tag);
  if (classe) item.className = classe;
  if (texto !== undefined) item.textContent = texto;
  return item;
}

function mudarAba(nome, foco = false) {
  aba = nome;
  document.querySelectorAll('[role="tab"]').forEach(botao => {
    const ativo = botao.dataset.tab === nome;
    botao.setAttribute('aria-selected', String(ativo));
    botao.tabIndex = ativo ? 0 : -1;
    if (ativo && foco) botao.focus();
  });
  $('panel-about').hidden = nome !== 'about';
  $('panel-images').hidden = nome !== 'images';
}

function selecionar(id) {
  const projeto = projetos.find(item => item.id === id);
  if (!projeto) return;
  selecionado = projeto;

  document.querySelectorAll('.project-choice').forEach(botao => {
    const ativo = botao.dataset.id === id;
    botao.classList.toggle('active', ativo);
    botao.setAttribute('aria-current', String(ativo));
  });

  $('project-title').textContent = projeto.nome;
  $('project-category').textContent = projeto.categoria;
  $('project-summary').textContent = projeto.resumo;
  $('project-position').textContent = 'PROJETO ' + String(projetos.indexOf(projeto) + 1).padStart(2, '0') + ' / 05';
  $('project-tags').replaceChildren(...projeto.tags.map(tag => elemento('span', '', tag)));

  $('project-details').replaceChildren(...projeto.detalhes.map(([titulo, texto, tipo]) => {
    const classe = tipo === 'award' ? 'award' : titulo === 'Minha participação' ? 'participation' : '';
    const secao = elemento('section', 'detail ' + classe);
    if (tipo === 'award') secao.append(elemento('p', 'award-label', 'RECONHECIMENTO / 2022'));
    secao.append(elemento('h4', '', titulo), elemento('p', '', texto));
    return secao;
  }));

  $('project-link').href = projeto.link;
  $('project-link').textContent = projeto.linkNome + ' ↗';
  mudarAba('about');
  renderGaleria();
}

function renderGaleria() {
  const imagens = selecionado.imagens;
  $('image-count').textContent = imagens.length;
  $('gallery').replaceChildren();

  if (!imagens.length) {
    const vazio = elemento('div', 'gallery-empty');
    vazio.append(elemento('span', '', '↗'), elemento('p', '', 'Os registros deste projeto estarão disponíveis em breve.'));
    $('gallery').append(vazio);
    return;
  }

  imagens.forEach(foto => {
    const figura = elemento('figure');
    const botao = elemento('button', 'image-open');
    botao.type = 'button';
    botao.setAttribute('aria-label', 'Ampliar: ' + foto.nome);

    const imagem = elemento('img');
    imagem.src = foto.src;
    imagem.alt = foto.nome;
    imagem.loading = 'lazy';
    imagem.addEventListener('error', () => {
      botao.replaceChildren(elemento('p', 'image-error', 'Imagem indisponível'));
      botao.disabled = true;
    });

    botao.append(imagem);
    botao.addEventListener('click', () => {
      $('dialog-image').src = foto.src;
      $('dialog-image').alt = foto.nome;
      $('dialog-caption').textContent = foto.nome;
      $('image-dialog').showModal();
    });

    figura.append(botao, elemento('figcaption', '', foto.nome));
    $('gallery').append(figura);
  });
}

projetos.forEach((projeto, indice) => {
  const botao = elemento('button', 'project-choice');
  botao.type = 'button';
  botao.dataset.id = projeto.id;
  const numero = elemento('span', 'choice-index');
  numero.append(elemento('span', '', String(indice + 1).padStart(2, '0')), elemento('span', '', '↗'));
  botao.append(numero, elemento('strong', 'choice-title', projeto.nome), elemento('span', 'choice-label', projeto.curto));
  botao.addEventListener('click', () => selecionar(projeto.id));
  $('project-list').append(botao);
});

document.querySelectorAll('[role="tab"]').forEach(botao => {
  botao.addEventListener('click', () => mudarAba(botao.dataset.tab));
  botao.addEventListener('keydown', evento => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(evento.key)) return;
    evento.preventDefault();
    const destino = evento.key === 'Home' ? 'about' : evento.key === 'End' ? 'images' : aba === 'about' ? 'images' : 'about';
    mudarAba(destino, true);
  });
});

document.querySelectorAll('[data-project]').forEach(link => {
  link.addEventListener('click', () => selecionar(link.dataset.project));
});

$('next-project').addEventListener('click', () => {
  const proximo = (projetos.indexOf(selecionado) + 1) % projetos.length;
  selecionar(projetos[proximo].id);
  $('project-panel').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
});

$('close-dialog').addEventListener('click', () => $('image-dialog').close());
$('image-dialog').addEventListener('click', evento => {
  if (evento.target !== $('image-dialog')) return;
  const limite = evento.target.getBoundingClientRect();
  if (evento.clientX < limite.left || evento.clientX > limite.right || evento.clientY < limite.top || evento.clientY > limite.bottom) {
    $('image-dialog').close();
  }
});

selecionar('estuda');
