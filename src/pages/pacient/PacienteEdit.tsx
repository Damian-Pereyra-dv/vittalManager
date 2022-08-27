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
import Paciente from "./Paciente";
import paciente from "./Paciente";
import {
  removePaciente,
  savePaciente,
  searchPacientes,
  searchPacienteById,
} from "./PacienteApi";

const PacienteEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [paciente, setPaciente] = useState<Paciente>({});
  const [nurseServices, setNurseServices] = useState<NurseService[]>([]);

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = () => {
    if (id !== "new") {
      let result = searchPacienteById(id);
      setPaciente(result);
    }
  };

  const save = () => {
    savePaciente(paciente);
   
    history.push("/page/Paciente");
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
              {id === "new" ? "Agregar Paciente" : "Editar Paciente"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput
                    onIonChange={(e) => (paciente.firstName = String(e.detail.value))}
                    value={paciente.firstName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellido</IonLabel>
                  <IonInput
                    onIonChange={(e) => (paciente.lastName =String(e.detail.value))}
                    value={paciente.lastName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Edad</IonLabel>
                  <IonInput
                    onIonChange={(e) => (paciente.age = String (e.detail.value))}
                    value={paciente.age}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    onIonChange={(e) => (paciente.email = String(e.detail.value))}
                    value={paciente.email}
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
                    onIonChange={(e) => (paciente.phone =String( e.detail.value))}
                    value={paciente.phone}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Calle/nro/Localidad</IonLabel>
                  <IonInput
                    onIonChange={(e) => (paciente.adress = String(e.detail.value))}
                    value={paciente.adress}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Servicio</IonLabel>
                  <IonInput class="divService"
                  
                    onIonChange={(e) => (paciente.service = String (e.detail.value))}
                    value={paciente.service} >
                      

<IonList>
      <IonItem>
        <IonSelect placeholder="Seleccione Servicio">

         
   
          <IonSelectOption value="Aplicacion de inyectable">Aplicacion de inyectable</IonSelectOption>
          <IonSelectOption value="Test-Covid-19">Test-Covid-19</IonSelectOption>
          <IonSelectOption value="Enema">Enema</IonSelectOption>
          <IonSelectOption value="Control de TA">Control de TA</IonSelectOption>
          
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

export default PacienteEdit;
