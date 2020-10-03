new Vue({
    el: "#app",
    data: {
        valorPercJogador: 100,
        valorPercMonstro: 100,
        jogoIniciado: false,
        venceu: false,
        perdeu: false,
        corBarJog: 'green',
        corBarMon: 'green',
        log: ''
    },
    computed: {
        strPercJogador() {
            return `${this.valorPercJogador}%`
        },
        strPercMonstro() {
            return `${this.valorPercMonstro}%`
        }
    },
    watch: {
        valorPercJogador() {
            if (this.valorPercJogador == 0) {
                this.perdeu = true
                this.jogoIniciado = false
            } else if(this.valorPercJogador <= 20){
               this.corBarJog = 'red'
            }
        },
        valorPercMonstro() {
            if (this.valorPercMonstro == 0) {0
                this.venceu = true
                this.jogoIniciado = false
            } else if(this.valorPercMonstro <= 20){
                this.corBarMon = 'red'
            }
        },
    },
    methods: {
        init() {
            this.valorPercJogador = 100
            this.valorPercMonstro = 100
            this.corBarJog = 'green'
            this.corBarMon = 'green'
            this.perdeu = false
            this.venceu = false
            this.log = ''
        },
        iniciarJogo() {
            this.jogoIniciado = true
            this.init()
        },
        desistirJogo() {
            this.jogoIniciado = false
            this.init()
        },
        ataque(tipo) {
            if(tipo == 'especial') {
                perc_monstro = this.getRandomInt(7, 11)
                perc_jog = this.getRandomInt(5, 8)
            } else if (tipo == 'simples') {
                perc_jog = this.getRandomInt(7, 11)
                perc_monstro = this.getRandomInt(5, 8)
            }
            this.controlePercentual('jogador', 'diminuir', perc_jog)
            this.controlePercentual('monstro', 'diminuir', perc_monstro)
            log_hist = this.log
            this.log = `<div class="text-center msg msg-danger">MONSTRO ATINGIU O JOGADOR COM ${perc_jog}.</div>`
            this.log += `<div class="text-center msg msg-success">JOGADOR ATINGIU O MONSTRO COM ${perc_monstro}.</div>`
            this.log += log_hist
        },
        curar() {
            perc_jog = this.getRandomInt(1, 4)
            this.controlePercentual('jogador', 'aumentar', perc_jog)
        },
        controlePercentual(pers, acao, quant) {
            if (pers == 'jogador'){
                if (acao == 'diminuir') {
                    this.valorPercJogador -= quant
                } else if (acao == 'aumentar') {
                    this.valorPercJogador += quant
                }
                this.valorPercJogador = this.validarLimiteBarProgress(this.valorPercJogador)
            } else if (pers == 'monstro') {
                if (acao == 'diminuir') {
                    this.valorPercMonstro -= quant
                } else if (acao == 'aumentar') {
                    this.valorPercMonstro += quant
                }
                this.valorPercMonstro = this.validarLimiteBarProgress(this.valorPercMonstro)
            }
        },
        validarLimiteBarProgress(valor) {
            if (valor > 100) {
                return valor = 100
            } else if (valor < 0){
                return valor = 0
            }
            return valor
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
    }
})