import NurseEmployee from "./NurseEmployee";
import NurseEmployeeEdit from "./NurseEmployeeEdit";

export async function searchNurseEmployees() {
 

    let url = process.env.REACT_APP_API + "nurses";
  
    let response = await fetch(url, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
  
    return await response.json();
}

export async function removeNurseEmployee(id: string) {
  let url = process.env.REACT_APP_API + "nurses/" + id;

  await fetch(url, {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    }
  })
}

export async function saveNurseEmployee(nurseEmployee:NurseEmployee) {
  let url = process.env.REACT_APP_API + "nurses";

await fetch(url, {
    "method": "POST",
    "body": JSON.stringify(nurseEmployee),
    "headers": {
      "Content-Type": "application/json"
    }
  })
}   



export async function  searchNurseEmployeeById(id: string) {
  let url = process.env.REACT_APP_API + "nurses/" + id ;

  let response = await fetch(url, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })

  return await response.json();
        
  }