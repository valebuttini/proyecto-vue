const {createApp} = Vue;
createApp({
    data(){
        return{
            titulo: "hola mundo de vue",
            parrafo: "esto es una app de gatos",
            catalogo: "tenemos stock" 
        }
    },
    created(){

    },
    methods:{

    }
}).mount("#app")