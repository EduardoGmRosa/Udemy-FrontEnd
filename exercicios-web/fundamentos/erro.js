function tratarErroeLancar(erro) {
    //throw new Error('Código Incorreto.')
    throw { 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e) {
        tratarErroeLancar(e)
    } finally {
        console.log('Final!')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)