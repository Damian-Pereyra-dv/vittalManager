import NurseService from "./NurseService";
export async function searchNurseServices() {

  let url = process.env.REACT_APP_API + "services";

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

export async function removeNurseService(id: string) {
  
  let url = process.env.REACT_APP_API + "services/" + id;

  await fetch(url, {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  //HERE delete STORAGE FROM LOCAL STORAGE
  /*
  let pacientes = await searchNurseServices();
  let indice = pacientes.findIndex((paciente: NurseService ) => paciente.id == id);

  pacientes.splice(indice, 1);

  localStorage["pacientes"] = JSON.stringify(pacientes);
  */
}

export async function saveNurseService(NurseService:NurseService) {

  let url = process.env.REACT_APP_API + "services";

await fetch(url, {
    "method": "POST",
    "body": JSON.stringify(NurseService),
    "headers": {
      "Content-Type": "application/json"
    }
  })


  /*
  let pacientes = await searchNurseServices();
  if (paciente.id){
    //edit
    let indice = pacientes.findIndex((p: NurseService) => p.id == paciente.id);
    pacientes[indice]=  paciente;
 } else { 
    paciente.id = String(Math.round (Math.random() *100000));
    pacientes.push(paciente);
 }
  localStorage["pacientes"] = JSON.stringify(pacientes);
}   
*/

}



export async function  searchNurseServiceById(id: string) {

  let url = process.env.REACT_APP_API + "services/" + id ;

  let response = await fetch(url, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  return await response.json();


   //HERE SEARCHbyid STORAGE FROM LOCAL STORAGE
    /*
    let pacientes = await searchNurseServices();
     return   pacientes.find((paciente:any) => paciente.id == id);
     */
        
  }