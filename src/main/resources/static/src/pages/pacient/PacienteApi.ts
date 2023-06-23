import Paciente from "./Paciente";

export async function searchPacientes() {

  let url = process.env.REACT_APP_API + "patients";

  let response = await fetch(url, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  return await response.json();

  //HERE SEARCH STORAGE FROM LOCAL STORAGE
/*
  if (!localStorage["pacientes"]) {
    localStorage["pacientes"] = "[]";
  }

  let pacientes = localStorage["pacientes"];
  pacientes = JSON.parse(pacientes);
  return pacientes;
  */
}

export async function removePaciente(id: string) {
  
  let url = process.env.REACT_APP_API + "patients/" + id;

  await fetch(url, {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  //HERE delete STORAGE FROM LOCAL STORAGE
  /*
  let pacientes = await searchPacientes();
  let indice = pacientes.findIndex((paciente: Paciente ) => paciente.id == id);

  pacientes.splice(indice, 1);

  localStorage["pacientes"] = JSON.stringify(pacientes);
  */
}

export async function savePaciente(paciente:Paciente) {

  let url = process.env.REACT_APP_API + "patients";

await fetch(url, {
    "method": "POST",
    "body": JSON.stringify(paciente),
    "headers": {
      "Content-Type": "application/json"
    }
  })


  /*
  let pacientes = await searchPacientes();
  if (paciente.id){
    //edit
    let indice = pacientes.findIndex((p: Paciente) => p.id == paciente.id);
    pacientes[indice]=  paciente;
 } else { 
    paciente.id = String(Math.round (Math.random() *100000));
    pacientes.push(paciente);
 }
  localStorage["pacientes"] = JSON.stringify(pacientes);
}   
*/

}



export async function  searchPacienteById(id: string) {

  let url = process.env.REACT_APP_API + "patients/" + id ;

  let response = await fetch(url, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  return await response.json();


   //HERE SEARCHbyid STORAGE FROM LOCAL STORAGE
    /*
    let pacientes = await searchPacientes();
     return   pacientes.find((paciente:any) => paciente.id == id);
     */
        
  }