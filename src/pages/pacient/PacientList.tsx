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
import { removePaciente, savePaciente, searchPaciente } from "./PacienteApi";

const PacientList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [pacientes, setPacientes] = useState<any>([]);

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, []);

  const search = () => {
    let result = searchPaciente();
    setPacientes(result);
  };

  const remove = (id: string) => {
    removePaciente(id);
    search();
  };

  const pruebaLocalStorage = () => {
    const example = {
      id: "0",
      firstName: "Damian",
      lastName: "Pereyra",
      age: "32",
      email: "pereyra@gmail.com",
      phone: "1138199734",
      adress: "Rangugni 3578, lanus",
      service: "Apto Fisico",
    };
    savePaciente(example);
     
  };

  const addPaciente = () => {
    history.push("/page/pacientes/new");
    
  };

  const editPaciente = (id:string) => {
    history.push("/page/pacientes/" +id );
   
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

            {pacientes.map((paciente: any) => (
              <IonRow>
                <IonCol>
                  {paciente.firstName} {paciente.lastName}
                </IonCol>
                <IonCol>{paciente.age}</IonCol>
                <IonCol>{paciente.email}</IonCol>
                <IonCol>{paciente.phone}</IonCol>
                <IonCol>{paciente.adress}</IonCol>
                <IonCol>{paciente.service}</IonCol>
                <IonCol>
                  <IonButton onClick={() => editPaciente(paciente.id) } color="primary" fill="solid" size="small">
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    onClick={() => remove(paciente.id)}
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
