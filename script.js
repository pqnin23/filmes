class Filme {
    constructor(nome, classificacao, duracao, genero, anoLancamento, sinopse, imagem, trailer) {
        this.nome = nome;
        this.classificacao = classificacao;
        this.duracao = duracao;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
        this.sinopse = sinopse;
        this.imagem = imagem;
        this.trailer = trailer;
    }

    toString() {
        return `
            <h3>${this.nome}</h3>
            <img src="${this.imagem}" alt="${this.nome}" style="width:200px;">
            <p><strong>Classificação:</strong> ${this.classificacao}</p>
            <p><strong>Duração:</strong> ${this.duracao} minutos</p>
            <p><strong>Gênero:</strong> ${this.genero}</p>
            <p><strong>Ano de Lançamento:</strong> ${this.anoLancamento}</p>
            <p><strong>Sinopse:</strong> ${this.sinopse}</p>
            <a href="${this.trailer}" target="_blank">Assistir Trailer</a>
        `;
    }
}

const catalogo = [];

document.getElementById('filmeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    cadastrarFilme();
});

function cadastrarFilme() {
    const nome = document.getElementById('nome').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = parseInt(document.getElementById('duracao').value);
    const genero = document.getElementById('genero').value;
    const ano = parseInt(document.getElementById('ano').value);
    const sinopse = document.getElementById('sinopse').value;
    const imagem = document.getElementById('imagem').value;
    const trailer = document.getElementById('trailer').value;

    const filme = new Filme(nome, classificacao, duracao, genero, ano, sinopse, imagem, trailer);
    catalogo.push(filme);
    alert('Filme cadastrado com sucesso!');
    document.getElementById('filmeForm').reset();
}

function buscarFilme() {
    const nomeBusca = document.getElementById('buscaNome').value;
    const filme = catalogo.find(f => f.nome.toLowerCase() === nomeBusca.toLowerCase());
    const resultadoBusca = document.getElementById('resultadoBusca');
    if (filme) {
        resultadoBusca.innerHTML = filme.toString();
    } else {
        resultadoBusca.innerHTML = 'Filme não encontrado.';
    }
}

function listarFilmes() {
    const resultadoListagem = document.getElementById('resultadoListagem');
    if (catalogo.length > 0) {
        resultadoListagem.innerHTML = catalogo.map(filme => filme.toString()).join('<hr>');
    } else {
        resultadoListagem.innerHTML = 'Nenhum filme cadastrado.';
    }
}

function editarFilme() {
    const nomeParaEditar = document.getElementById('editaNome').value;
    const filme = catalogo.find(f => f.nome.toLowerCase() === nomeParaEditar.toLowerCase());
    if (filme) {
        const novoNome = prompt('Novo nome (deixe em branco para não alterar):', filme.nome);
        if (novoNome) filme.nome = novoNome;

        const novaClassificacao = prompt('Nova classificação (deixe em branco para não alterar):', filme.classificacao);
        if (novaClassificacao) filme.classificacao = novaClassificacao;

        const novaDuracao = prompt('Nova duração (deixe em branco para não alterar):', filme.duracao);
        if (novaDuracao) filme.duracao = parseInt(novaDuracao);

        const novoGenero = prompt('Novo gênero (deixe em branco para não alterar):', filme.genero);
        if (novoGenero) filme.genero = novoGenero;

        const novoAno = prompt('Novo ano de lançamento (deixe em branco para não alterar):', filme.anoLancamento);
        if (novoAno) filme.anoLancamento = parseInt(novoAno);

        const novaSinopse = prompt('Nova sinopse (deixe em branco para não alterar):', filme.sinopse);
        if (novaSinopse) filme.sinopse = novaSinopse;

        alert('Filme atualizado com sucesso!');
    } else {
        alert('Filme não encontrado.');
    }
}

function excluirFilme() {
    const nomeParaExcluir = document.getElementById('excluiNome').value;
    const index = catalogo.findIndex(f => f.nome.toLowerCase() === nomeParaExcluir.toLowerCase());
    if (index !== -1) {
        catalogo.splice(index, 1);
        alert('Filme excluído com sucesso!');
    } else {
        alert('Filme não encontrado.');
    }
}
