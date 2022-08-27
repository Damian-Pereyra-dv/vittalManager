import Paciente from "./Paciente";

export function searchPacientes() {
  if (!localStorage["pacientes"]) {
    localStorage["pacientes"] = "[]";
  }

  let pacientes = localStorage["pacientes"];
  pacientes = JSON.parse(pacientes);
  return pacientes;
}

export function removePaciente(id: string) {
  let pacientes = searchPacientes();
  let indice = pacientes.findIndex((paciente: Paciente ) => paciente.id == id);

  pacientes.splice(indice, 1);

  localStorage["pacientes"] = JSON.stringify(pacientes);
}

export function savePaciente(paciente:Paciente) {
  let pacientes = searchPacientes();
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



export function  searchPacienteById(id: string) {
    let pacientes = searchPacientes();
     return   pacientes.find((paciente:any) => paciente.id == id);
        
  }