addEventListener("DOMContentLoaded", (e)=>{
    let myfrom = document.querySelector("#calcularPesos");
    let pesos = 4896.56;
    myfrom.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let caculo = Number(data.dolar)*pesos;
        document.querySelector("pre").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(caculo);
  })
})


// Suponiendo que nos encontramos descansando en una nuestra casa en una ciudad de Colombia 
// requiero hacer un plan detallado para llegar a tiempo a mi sitio de trabajo el día siguiente

console.table(["El día anterior debo tener lista la maleta y preparada la ropa para usar al día siguiente",
"Levantarme a las 5 am de la mañana,Bañarme y preparar el desayuno",
  "Antes de salir de la casa verificar cierre de llaves y electrodomésticos apagados y desconectados",
  "Abrir la página de  de Verificar estado del tráfico y rutas de carretera",
  "Subir las maletas al carro",
  "Cerrar con llave la puerta de la casa",
  "Prender el carro y salir a las 6:00am",
   "Conducir por la carretera aproximadamente 60 minutos",
   "Llegar al lugar de trabajo aproximadamente 7:45 am",
   "Iniciar la jornada laboral a las 8: 00 am"]  
  )


  

