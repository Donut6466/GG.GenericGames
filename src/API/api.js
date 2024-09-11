export async function listarCatalogo() {
    const resultado = await fetch("https://mikejobrn.github.io/catalogo-jogos-api/");
    const dados = await resultado.json();
    return dados;
}