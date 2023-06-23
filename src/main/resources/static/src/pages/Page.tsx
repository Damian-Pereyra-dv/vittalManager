import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [presentAlert] = useIonAlert();
  
  function Example() {
    window.onload = () => {
  presentAlert({
    header: 'BIENVENIDOS A VITTAL MANAGEMENT',
    subHeader: 'Esto es un proyecto demo independendiente sobre la gestion de servicios de enfermeria',
    message: 'El mismo no es funcional para la empresa ni los datos brindados corresponden a pacientes reales',
    buttons: ['CONTINUAR!'],
  })
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
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
