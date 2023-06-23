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
import { add, checkmark, close, logoMarkdown, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import NurseService from "../nurseService/NurseService";
import { searchNurseServices } from "../nurseService/NurseServiceApi";
import Paciente from "./Paciente";
import paciente from "./Paciente";
import {
  removePaciente,
  savePaciente,
  searchPacientes,
  searchPacienteById,
} from "./PacienteApi";

const PacienteEdit: React.FC = () => {
  const { name} = useParams<{ name: string;}>();
 

  const [paciente, setPaciente] = useState<Paciente>({});
  const [nurseServices, setNurseServices] = useState<NurseService[]>([]);

 
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/Paciente/:id");
    const id = routeMatch?.params?.id;

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
    search2();
  }, [history.location.pathname]);

  const search = async () => {
   
    if (id === "new") {
     setPaciente({});
    } else{
      let result = await searchPacienteById(id);
      setPaciente(result);
    }
    };
    

  const save = async () => {
    await savePaciente(paciente);

 
   
    history.push("/page/Paciente");
    window.location.reload()
  };
  const search2 = async () => {
    let result = await searchNurseServices();
    setNurseServices(result);
  };

  const cancel = async () => {
    window.history.back();
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
                    onIonChange={(e) => (paciente.address = String(e.detail.value))}
                    value={paciente.address}
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

        {nurseServices.map((nurseService: NurseService) => (
        
        <IonRow>
           <IonSelectOption value={nurseService.service}>
           <IonCol>{nurseService.service}</IonCol>
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
              <IonButton
                onClick={cancel}
                color="danger"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={close} />
                Cancelar
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default PacienteEdit;
function async() {
  throw new Error("Function not implemented.");
}

