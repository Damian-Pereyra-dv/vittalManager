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
  useIonAlert,
} from "@ionic/react";
import { Agent } from "https";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import Paciente from "./Paciente";
import paciente from "./Paciente";
import { removePaciente, savePaciente, searchPacientes } from "./PacienteApi";

const PacientList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string }>();

  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [presentAlert] = useIonAlert();

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchPacientes();
    setPacientes(result);
  };

  const remove = async (id: string) => {
    await removePaciente(id);
    search();
  };

  

  const addPaciente = () => {
    history.push("/page/paciente/new");
  };

  const editPaciente = (id: string) => {
    history.push("/page/Paciente/" + id);
  };

  function Example() {
    window.onload = () => {
 
}
}
  return (
    
    <IonPage>
      <IonHeader> {Example()}
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

          

          <IonTitle>Gestion de Pacientes</IonTitle>
          
     

          <IonItem>
            <IonButton
              onClick={addPaciente}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar paciente
            </IonButton>
          </IonItem>
          <IonGrid class="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Edad</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Servicio</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {pacientes.map((paciente: Paciente) => (
              <IonRow>
                <IonCol>
                  {paciente.firstName} {paciente.lastName}
                </IonCol>
                <IonCol>{paciente.age}</IonCol>
                <IonCol>{paciente.email}</IonCol>
                <IonCol>{paciente.phone}</IonCol>
                <IonCol>{paciente.address}</IonCol>
                <IonCol>{paciente.service}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editPaciente(String(paciente.id))}
                    color="primary"
                    fill="solid"
                    size="small"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    onClick={() => remove(String(paciente.id))}
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

export default PacientList;
