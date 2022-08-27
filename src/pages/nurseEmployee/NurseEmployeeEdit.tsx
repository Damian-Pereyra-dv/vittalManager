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

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = () => {
    if (id !== "new") {
      let result = searchNurseEmployeeById(id);
      setNurseEmployee(result);
    }
  };

  const save = () => {
    saveNurseEmployee(nurseEmployee);
   
    history.push("/page/NurseEmployee");
    window.location.reload()
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
                  
                    onIonChange={(e) => (nurseEmployee.pacient = String (e.detail.value))}
                    value={nurseEmployee.pacient} >
                      

<IonList>
      <IonItem>
        <IonSelect placeholder="Seleccione Paciente">

         
   
          <IonSelectOption value="Damian Pereyra ID: 65487">Damian Pereyra ID: 65487</IonSelectOption>
          <IonSelectOption value="Laura Pinto ID:48643">Laura Pinto ID:48643</IonSelectOption>
          <IonSelectOption value="Victoria Morinico ID:54664">Victoria Morinico ID:54664</IonSelectOption>
          <IonSelectOption value="Miriam Mignoli ID:46541">Miriam Mignoli ID:46541</IonSelectOption>
          
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
