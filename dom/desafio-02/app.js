new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botão Clicado.')
        },
        capturaValor(event) {
            this.valor = event.target.value
        }
    }
})