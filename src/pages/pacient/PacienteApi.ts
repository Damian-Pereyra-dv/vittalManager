export function searchPaciente() {
  if (!localStorage["pacientes"]) {
    localStorage["pacientes"] = "[]";
  }

  let pacientes = localStorage["pacientes"];
  pacientes = JSON.parse(pacientes);
  return pacientes;
}

export function removePaciente(id: string) {
  let pacientes = searchPaciente();
  let indice = pacientes.findIndex((paciente: any) => paciente.id == id);

  pacientes.splice(indice, 1);

  localStorage["pacientes"] = JSON.stringify(pacientes);
}

export function savePaciente(paciente: any) {
  let pacientes = searchPaciente();
  if (paciente.id)
 {
    //edit
    let indice = pacientes.findIndex((p: any) => p.id == paciente.id);
    paciente[indice]=  paciente;
 } else { 
    paciente.id = Math.round (Math.random() *100000);
    pacientes.push(paciente);
 }
  localStorage["pacientes"] = JSON.stringify(pacientes);
}   



export function searchPacienteById(id: string) {
    let pacientes = searchPaciente();
     return   pacientes.find((paciente:any) => paciente.id == id);
        
  }