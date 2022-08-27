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
import NurseService from "./NurseService";
import nurseService from "./NurseService";
import { removeNurseService, saveNurseService, searchNurseServices } from "./NurseServiceApi";

const PacientList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string }>();

  const [nurseServices, setNurseServices] = useState<NurseService[]>([]);

  const history = useHistory();

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchNurseServices();
    setNurseServices(result);
  };

  const remove = (id: string) => {
    removeNurseService(id);
    search();
  };

  

  const addNurseService = () => {
    history.push("/page/nurseService/new");
  };

  const editNurseService = (id: string) => {
    history.push("/page/nurseService/" + id);
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
          <IonTitle>Gestion de Servicios de enfermeria</IonTitle>

          <IonItem>
            <IonButton
              onClick={addNurseService}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar Servicio
            </IonButton>
          </IonItem>
          <IonGrid class="table">
            <IonRow>
              <IonCol>Servicio</IonCol>
              <IonCol>Complejidad</IonCol>
              <IonCol>Precio $</IonCol>
              <IonCol>Acciones</IonCol>
             
            </IonRow>

            {nurseServices.map((nurseService: NurseService) => (
              <IonRow>
               
                <IonCol>{nurseService.service}</IonCol>
                <IonCol>{nurseService.difficult}</IonCol>
                <IonCol>{nurseService.price}</IonCol>
                
                <IonCol>
                  <IonButton
                    onClick={() => editNurseService(String(nurseService.id))}
                    color="primary"
                    fill="solid"
                    size="small"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    onClick={() => remove(String(nurseService.id))}
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
