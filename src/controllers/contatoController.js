exports.paginaInicial = (req, res) => {
    res.send(`
    Pagina contato
    <form action="/" method="POST">
    F: <input type="text" name="name"></input>
    <button>Enviar</button>
    </form>
    `)
}
