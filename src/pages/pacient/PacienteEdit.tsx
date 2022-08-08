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
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Agent } from "https";
import { add, checkmark, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { removePaciente, savePaciente, searchPaciente, searchPacienteById } from "./PacienteApi";

const PacienteEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [paciente, setPaciente] = useState<any>({});

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, []);

  const search = () => {
    if (id !== "new") {
        let result = searchPacienteById(id);
        setPaciente(result);

    }

    //let result =  searchPaciente();
    //setPacientes(result);
  };

  const save = () => {
    paciente.id = Math.round (Math.random() *100000);
    savePaciente(paciente);
    history.push("/page/Pacientes" +id);
  }

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
            <IonTitle>{id === "new" ? "Agregar Cliente": "Editar cliente"}</IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput onIonChange={e => paciente.firstName = e.detail.value} value={paciente.firstName}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellido</IonLabel>
                  <IonInput onIonChange={e => paciente.lastName = e.detail.value} value={paciente.lastName}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel  position="stacked">Edad</IonLabel>
                  <IonInput onIonChange={e => paciente.age = e.detail.value} value={paciente.age}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput onIonChange={e => paciente.email = e.detail.value} value={paciente.email}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Telefono</IonLabel>
                  <IonInput onIonChange={e => paciente.phone = e.detail.value} value={paciente.phone}> </IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Calle/nro/Localidad</IonLabel>
                  <IonInput onIonChange={e => paciente.adress = e.detail.value} value={paciente.adress}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Servicio</IonLabel>
                  <IonInput onIonChange={e => paciente.service = e.detail.value} value={paciente.service}>  </IonInput>
                </IonItem>
              </IonCol>

           
            </IonRow>

            <IonItem>
              <IonButton  onClick={save} color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>

        <IonButton onClick={() => {}} color="danger" fill="solid" size="small">
          AGREGAR PACIENTE DE BASE LOCAL
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PacienteEdit;
