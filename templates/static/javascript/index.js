new Vue({
    el: "#app",
    data:{
        valores: "",
    },
    methods:{
        inicia(){
            this.valores = "Saludos desde el frontend de vuejs";
            console.log("Carga exitosa de archivos en el servidor");
        },
    },
    mounted(){
        this.inicia();
    },
    computed:{
    }
});