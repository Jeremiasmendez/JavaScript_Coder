const form = document.querySelector(".form")

const enviar = (event) => {
  event.preventDefault();
  let usuario = event.target.usuario.value;
  let empezar = event.target.empezar.value;
  let curso = event.target.curso.value;
  let nivel = event.target.nivel.value;
  let i = 0;




  //let usuario = prompt ("Ingrese su nombre de usuario")
 
 let welcome = (document.querySelector(".welcome").textContent=(`Bienvenido ${usuario}`) )

 // alert (`Bienvenido ${usuario} a Music Class`)
 
 
 // //let empezar = prompt("¿Te gustaría aprender música?").toLowerCase()
 
  if (empezar==="si","SI","Si", "sI") {
 //   // let curso = prompt(`¿Con cual curso te gustaría empezar?
 //   // 0 - Guitarra
 //   // 1 - Bajo
 //   // 2 - Canto
 //   // 3 - Piano`);
   
    function cursos(niveles) {
        switch (curso) {
            case "0":
              console.log(`${usuario} eligió el curso de guitarra`)
              break;
            case "1":
              console.log(`${usuario} eligió el curso de bajo`)
              break;
            case "2":
              console.log(`${usuario} eligió el curso de canto`)
              case "3":
                  console.log(`${usuario} eligió el curso de piano`)
              break;
            default:
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal',
              
              });
              break;
             
          }
          niveles();
    }
    let arraycursos =["guitarra", "bajo", "canto", "piano"]
    let cursohtml = (document.querySelector(".curso").textContent=("Usted seleccionó el curso de " + arraycursos[curso]) )

        if (nivel === "0","1","2","3") {
          function niveles() {
            
        let arraynivel =["Principiante", "Intermedio", "Avanzado"]
        let nivelhtml = (document.querySelector(".nivel").textContent=("El nivel escogido es " + arraynivel[nivel]) )
        
              console.log(`${usuario} tiene un nivel de ` + arraynivel[nivel] )
            
        }
          
        } else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal',
          
          });
          
        }
 
   
   
    cursos(niveles);
    

    let starthtml = (document.querySelector(".start").textContent=("Ya tenemos los datos para finalizar la inscripción! Gracias") )

   
 
  } else {
    console.log("Espero que cambies de opinión! te esperamos")
    let starthtml = (document.querySelector(".start").textContent=("Espero que cambies de opinión, te esperamos!!") )
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal',
    
    })
  }
 
  function Curso (nombre, tiempo, vacante) {
    this.nombre = nombre;
    this.tiempo = tiempo;
    this.vacante = vacante;
  }
 
  const curso1 = new Curso ("Guitarra", 2800 , true);
  const curso2 = new Curso ("Bajo", 3000 , true);
  const curso3 = new Curso ("Canto", 3500 , true);
  const curso4 = new Curso ("Piano", 3200 , true);
 
  const arraycursos = [curso1,curso2,curso3,curso4]
 
  // let timecurso = 0;
 
  // time.forEach ((producto) => {
  //   timecurso += producto.tiempo;
  // } );
 
  console.log(`El tiempo total requerido para completar el curso de ` + arraycursos[curso].nombre +" es de " + arraycursos[curso].tiempo +" minutos") 

  let time = (document.querySelector(".time").textContent=(`El tiempo total requerido para completar el curso de ` + arraycursos[curso].nombre +" es de " + arraycursos[curso].tiempo +" minutos"));

  let date =(document.querySelector(".date").textContent=("La fecha de tu registro es " + Date()))

  Swal.fire(
    'Listo',
    'Tu registro se completó con exito',
    'success'
  )


  const promise = (empezar) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
  
        empezar == "si", "SI", "sI", "Si" ? resolve("Usted se inscribió en el mejor curso de música ") : reject("No se pudo completar la inscripción")
        
      }, 5000);
    })
  }
  
  promise (empezar)
    .then ((respuesta) => {
      console.log(respuesta)
    })
    .catch((respuesta)=>{
      console.log(respuesta)
    })


  
}


form.addEventListener("submit", enviar)


const botonColorMode = document.querySelector("#modo");
const body = document.body;
let moscuro = localStorage.getItem("Modo");
function activarModo() {
    body.classList.add("oscuro");
    localStorage.setItem("Modo", "activado");
}
function desactivarModo() {
    body.classList.remove("oscuro");
    localStorage.setItem("Modo", "desactivado");
}
if (moscuro === "activado") {
    activarModo();
} else {
    desactivarModo();
}
botonColorMode.addEventListener("click", () => {
    moscuro = localStorage.getItem("Modo");

    if (moscuro === "activado") {
        desactivarModo();
    } else {
        activarModo();
    }
})


const lista = document.querySelector("#lista");

fetch("./data.json")
.then((respuesta) => respuesta.json())
.then((data) => {
  data.forEach((clases) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2> Curso de ${clases.curso}</h2>
      <h4>Este curso lleva un promedio de ${clases.tiempo} minutos</h4>
      <h4>Curso actualmente ${clases.vacante}</h4>
      `;
    lista.append(li);
  });
}); 































 










