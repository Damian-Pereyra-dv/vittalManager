import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import PacientList from './pages/pacient/PacientList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PacienteEdit from './pages/pacient/PacienteEdit';
import NurseServiceList from './pages/nurseService/NurseServiceList';
import NurseServiceEdit from './pages/nurseService/NurseServiceEdit';
import NurseEmployeeList from './pages/nurseEmployee/NurseEmployeeList';
import NurseEmployeeEdit from './pages/nurseEmployee/NurseEmployeeEdit';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/page/Paciente" />
            </Route>

            <Route path="/page/Paciente" exact={true}>
             <PacientList />
            </Route>
            
            <Route path="/page/paciente/:id" exact={true}>
             <PacienteEdit />
            </Route>

            <Route path="/page/nurseServices" exact={true}>
            
             <NurseServiceList />
             
            </Route>
            
            <Route path="/page/nurseService/:id" exact={true}>
             <NurseServiceEdit />

             
             
            </Route>

            <Route path="/page/nurseEmployee" exact={true}>
            
            <NurseEmployeeList />
            
           </Route>
           
           <Route path="/page/nurseEmployee/:id" exact={true}>
            <NurseEmployeeEdit />

            
            
           </Route>


          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
