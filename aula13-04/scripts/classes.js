var urlBase = "http://localhost:3000/contatos"

class Contato {
    constructor(id, nome, fone, email) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
    }

    salvar() {
        fetch(urlBase, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-type': 'Application/json'
                }
            })
            .catch(erro => console.log(erro))
    }

    consultarTodos(display) {
        fetch(urlBase)
            .then(x => x.text())
            .then(data => display(data))
    }

    consultarPeloId(idcontato, display) {
        fetch(`${urlBase}/${idcontato}`)
            .then(x => x.text())
            .then(data => display(data))
    }

    update() {
        fetch(`${urlBase}/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })
    }

    excluir(idcontato) {
        fetch(`${urlBase}/${idcontato}`, {
            method: 'DELETE'
        })
    }

}