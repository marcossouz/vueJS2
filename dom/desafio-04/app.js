new Vue({
	el: '#desafio',
	data: {
		classe1: true,
		efeito: 'default',
		myClass: 'c1',
		myClass2: 'c2',
		classUser: 'c1',
		classUser2: 'c1',
		class3: '',
		classUser5: '',
		cor: 'blue',
		corTexto: 'green'
	},
	methods: {
		iniciarEfeito() {
			this.efeito = this.getEfeito
		},
		iniciarProgresso() {

		}
	},
	watch: {
		efeito() {
			setTimeout(() => {
				this.classe1 = !this.classe1
				this.efeito = this.getEfeito
			}, 500)
		}
	},
	computed: {
		getEfeito() {
			return {
				destaque: this.classe1,
				encolher: !this.classe1,
			}
		},
		verif() {
			return this.class3 === 'true' ? true : false
		}
	}

})
