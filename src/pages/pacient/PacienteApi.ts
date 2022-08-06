export function searchPaciente () {

    if(!localStorage["pacientes"]) {

        localStorage["pacientes"] = "[]";
    }

    let pacientes= localStorage["pacientes"]
    pacientes= JSON.parse(pacientes);
    return pacientes;
  

}

export function removePaciente (id: string) {

    let pacientes= searchPaciente();
    let indice=  pacientes.findIndex((paciente:any) => paciente.id == id);

    pacientes.splice(indice,1);
    
    localStorage["pacientes"] = JSON.stringify(pacientes);



}

export function savePaciente (paciente:any) {


    let pacientes= searchPaciente( );
    pacientes.push(paciente);
    localStorage["pacientes"] = JSON.stringify(pacientes);

}