import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Agent } from "https";
import { add, checkmark, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import NurseService from "../nurseService/NurseService";
import paciente from "../pacient/Paciente";
import Paciente from "../pacient/Paciente";
import { searchPacientes } from "../pacient/PacienteApi";
import NurseEmployee from "./NurseEmployee";
import nurseEmployee from "./NurseEmployee";
import {
  removeNurseEmployee,
  saveNurseEmployee,
  searchNurseEmployees,
  searchNurseEmployeeById,
} from "./NurseEmployeeApi";

const NurseEmployeeEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [nurseEmployee, setNurseEmployee] = useState<NurseEmployee>({});
  const [nurseServices, setNurseServices] = useState<NurseService[]>([]);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search2();
    search();
  }, [history.location.pathname]);

  const search = async () => {
    if (id !== "new") {
      let result = searchNurseEmployeeById(id);
      setNurseEmployee(await result);
    }
  };

  const save = () => {
    saveNurseEmployee(nurseEmployee);
   
    history.push("/page/NurseEmployee");
    window.location.reload()
  };
  const search2 = async () => {
    let result = await searchPacientes();
    setPacientes(result);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
            <IonTitle>
              {id === "new" ? "Agregar Enfermero" : "Editar Enfermero"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput
                    onIonChange={(e) => (nurseEmployee.firstName = String(e.detail.value))}
                    value={nurseEmployee.firstName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellido</IonLabel>
                  <IonInput
                    onIonChange={(e) => (nurseEmployee.lastName =String(e.detail.value))}
                    value={nurseEmployee.lastName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
            

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    onIonChange={(e) => (nurseEmployee.email = String(e.detail.value))}
                    value={nurseEmployee.email}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Telefono</IonLabel>
                  <IonInput
                    onIonChange={(e) => (nurseEmployee.phone =String( e.detail.value))}
                    value={nurseEmployee.phone}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
             
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Paciente Asignado</IonLabel>
                  <IonInput class="divService"
                  
                    onIonChange={(e) => (nurseEmployee.patient_assigned = String (e.detail.value))}
                    value={nurseEmployee.patient_assigned} >
                      
                      

                      <IonList>

<IonItem>

  <IonSelect placeholder="Seleccione Paciente">

  {pacientes.map((pacientes: paciente) => (
  
  <IonRow>
     <IonSelectOption value={pacientes.lastName}>
     <IonCol>{pacientes.firstName} {pacientes.lastName}</IonCol>
     </IonSelectOption>
         
  
 
  

</IonRow>
  
    ))}
  </IonSelect>
</IonItem>

</IonList>
     
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonItem>
              <IonButton
                onClick={save}
                color="success"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default NurseEmployeeEdit;
