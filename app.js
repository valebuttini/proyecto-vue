const {createApp} = Vue;
createApp({
    data(){
        return{
            titulo: "ESTO ES UNA APP DE COMIDA",
            parrafo: "Nuestro catalogo sera de comidas tradicionales argentinas",
            parrafoInformativo: "Estamos abriendo !! Hoy solo tenemos asado clasico !!!" ,
            div:` 
            <h1> ELEGI LA CANTIDAD DE PIEZAS</h1>
            `,
            numero: 1,
            parrafo1: ""
        }
    },
    created(){

    },
    methods:{
        suma(){
            this.numero +=1
        },
        resta(){
            this.numero -=1
        }

    }
}).mount("#app")