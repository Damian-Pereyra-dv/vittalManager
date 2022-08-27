import NurseEmployee from "./NurseEmployee";

export function searchNurseEmployees() {
  if (!localStorage["nurseEmployees"]) {
    localStorage["nurseEmployees"] = "[]";
  }

  let nurseEmployees = localStorage["nurseEmployees"];
  nurseEmployees = JSON.parse(nurseEmployees);
  return nurseEmployees;
}

export function removeNurseEmployee(id: string) {
  let nurseEmployees = searchNurseEmployees();
  let indice = nurseEmployees.findIndex((nurseEmployee: NurseEmployee ) => nurseEmployee.id == id);

  nurseEmployees.splice(indice, 1);

  localStorage["nurseEmployees"] = JSON.stringify(nurseEmployees);
}

export function saveNurseEmployee(nurseEmployee:NurseEmployee) {
  let nurseEmployees = searchNurseEmployees();
  if (nurseEmployee.id){
    //edit
    let indice = nurseEmployees.findIndex((p: NurseEmployee) => p.id == nurseEmployee.id);
    nurseEmployees[indice]=  nurseEmployee;
 } else { 
    nurseEmployee.id = String(Math.round (Math.random() *100000));
    nurseEmployees.push(nurseEmployee);
 }
  localStorage["nurseEmployees"] = JSON.stringify(nurseEmployees);
}   



export function  searchNurseEmployeeById(id: string) {
    let nurseEmployees = searchNurseEmployees();
     return   nurseEmployees.find((nurseEmployee:any) => nurseEmployee.id == id);
        
  }