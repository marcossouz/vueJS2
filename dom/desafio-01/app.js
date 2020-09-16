new Vue({
    el: "#desafio",
    data: {
        nome: "Marcos Souza",
        idade: 29,
        urlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlETbfD9BAqR_gi_BPfMOOrAhfP4Opc-Tw0TvqgxCH2BMjpHTg4lruG4psxu9_9_GuHPOvU3c77TMlAtRgIF8XHQ&usqp=CAU&ec=45702847"
        
    },
    methods: {
        idade3x() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})