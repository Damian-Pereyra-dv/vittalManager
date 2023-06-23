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
import { useHistory, useParams, useRouteMatch } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import NurseService from "./NurseService";
import nurseService from "./NurseService";
import {
  removeNurseService,
  saveNurseService,
  searchNurseServices,
  searchNurseServiceById,
} from "./NurseServiceApi";

const NurseServiceEdit: React.FC = () => {
  const { name} = useParams<{ name: string;}>();

  const [nurseService, setNurseService] = useState<NurseService>({});

  const history = useHistory();

  
  const routeMatch: any = useRouteMatch("/page/nurseService/:id");
    const id = routeMatch?.params?.id;

  useEffect(() => {
    // lo que se va a ejecutar apenas entremos
    search();
  }, [history.location.pathname]);

  const search = async () => {
    if (id === "new") {
      setNurseService({});
     } else{
       let result = await searchNurseServiceById(id);
       setNurseService(result);
     }
     };
 

  const save = () => {
    saveNurseService(nurseService);
    
    history.push("/page/nurseServices");
    window.location.reload();
    
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
              {id === "new" ? "Agregar servicio" : "Editar servicio"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Tipo de Servicio</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      (nurseService.service = String(e.detail.value))
                    }
                    value={nurseService.service}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Complejidad</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      (nurseService.difficulty = String(e.detail.value))
                    }
                    value={nurseService.difficulty}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Precio $</IonLabel>
                  <IonInput
                    onIonChange={(e) => (nurseService.price = String(e.detail.value))}
                    value={nurseService.price}
                  >
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

export default NurseServiceEdit;
