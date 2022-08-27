import NurseService from "./NurseService";

export function searchNurseServices() {
  if (!localStorage["nurseServices"]) {
    localStorage["nurseServices"] = "[]";
  }

  let nurseServices = localStorage["nurseServices"];
  nurseServices = JSON.parse(nurseServices);
  return nurseServices;
}

export function removeNurseService(id: string) {
  let nurseServices = searchNurseServices();
  let indice = nurseServices.findIndex((nurseService: NurseService ) => nurseService.id == id);

  nurseServices.splice(indice, 1);

  localStorage["nurseServices"] = JSON.stringify(nurseServices);
}

export function saveNurseService(nurseService:NurseService) {
  let nurseServices = searchNurseServices();
  if (nurseService.id){
    //edit
    let indice = nurseServices.findIndex((p: NurseService) => p.id == nurseService.id);
    nurseServices[indice]=  nurseService;
 } else { 
    nurseService.id = String(Math.round (Math.random() *100000));
    nurseServices.push(nurseService);
 }
  localStorage["nurseServices"] = JSON.stringify(nurseServices);
}   



export function  searchNurseServiceById(id: string) {
    let nurseServices = searchNurseServices ();
     return   nurseServices.find((nurseService:any) => nurseService.id == id);
        
  }
  