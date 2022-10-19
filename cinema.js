const catalogo = require('./database/catalogo.json');

const listarTodosOsFilmesEmCartaz = () => {
    console.log(catalogo.filter((filme) => filme.emCartaz === true));
}
console.log("Função listar filmes:")
listarTodosOsFilmesEmCartaz()

const buscarFilme = () => {
    console.log(catalogo.filter((filme) => {
        return filme.titulo == 'Harry Potter e a Pedra Filosofal'
    }));
}
console.log("Função buscar filme:")
buscarFilme();

const alterarStatusEmCartaz = (codigo) => {
    let filme = catalogo.find((filme) => filme.codigo == codigo)

    filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;


    console.log(filme)
}
console.log("Função alterar status:")
alterarStatusEmCartaz(2);

console.log("Função listar filme de longa duração:")
const listarFilmesDeLongaDuracao = () => {
    return catalogo.filter((filme => filme.duracao > 2))
}
console.log(listarFilmesDeLongaDuracao())