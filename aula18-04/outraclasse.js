class Agenda {
    constructor(data, hora, descricao, contato) {
        this.data = data
        this.hora = hora
        this.descricao = descricao
        this.contato = contato
    }

    display() {
        console.log(`
         Data: ${this.data}
         hora: ${this.hora} 
         Descricao: ${this.descricao} 
         Contato: ${this.contato}`)
    }

}
///instancia objeto
let registro = new Agenda('10/02/2022', '14:00', 'Fazer crochê', 'Maria')
registro.display()

let registro2 = new Agenda()
registro2.data = '15/04/2022'
registro2.display()