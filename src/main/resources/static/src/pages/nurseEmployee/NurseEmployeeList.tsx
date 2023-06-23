import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Agent } from "https";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import NurseEmployee from "./NurseEmployee";
import nurseEmployee from "./NurseEmployee";
import { removeNurseEmployee, saveNurseEmployee, searchNurseEmployees } from "./NurseEmployeeApi";

const NurseEmployeeList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string }>();

  const [nurseEmployees, setNurseEmployees] = useState<NurseEmployee[]>([]);

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = searchNurseEmployees();
    setNurseEmployees(await result);
  };

  const remove = (id: string) => {
    removeNurseEmployee(id);
    search();
  };

  

  const addNurseEmployee = () => {
    history.push("/page/nurseEmployee/new");
  };

  const editNurseEmployee = (id: string) => {
    history.push("/page/NurseEmployee/" + id);
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

        <IonCard class="card">
          <IonTitle>Gestion de Enfermeros</IonTitle>

          <IonItem>
            <IonButton
              onClick={addNurseEmployee}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar Enfermero
            </IonButton>
          </IonItem>
          <IonGrid class="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
             
              <IonCol>Paciente Asignado</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {nurseEmployees.map((nurseEmployee: NurseEmployee) => (
              <IonRow>
                <IonCol>
                  {nurseEmployee.firstName} {nurseEmployee.lastName}
                </IonCol>
                
                <IonCol>{nurseEmployee.email}</IonCol>
                <IonCol>{nurseEmployee.phone}</IonCol>
             
                <IonCol>{nurseEmployee.patient_assigned}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editNurseEmployee(String(nurseEmployee.id))}
                    color="primary"
                    fill="solid"
                    size="small"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    onClick={() => remove(String(nurseEmployee.id))}
                    color="danger"
                    fill="solid"
                    size="small"
                  >
                    <IonIcon icon={close} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NurseEmployeeList;
