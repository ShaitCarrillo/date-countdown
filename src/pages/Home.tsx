import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronBack, saveOutline, time, timeOutline } from 'ionicons/icons';

import './Home.css';
import { IDateCounter } from '../interfaces';
import { useRef } from 'react';
import { useForm } from '../hooks';
import { GetCurrentDateTime } from '../helpers/DateTime';

const Home: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);
  const currDate = GetCurrentDateTime()

  const { date, type, onInputChange, onResetForm } = useForm({
    type: 'regressive',
    date: currDate
  })
  // const params: IDateCountDown = {
  //   dateOne: "06/13/2023",
  //   dateTwo: "07/01/2023",
  //   type: 'future'
  // }

  // const getDateDiff = ({ dateOne, dateTwo, type }: IDateCountDown) => {
  //   const dateOneDate = new Date(dateOne)
  //   const dateTwoDate = new Date(dateTwo)

  //   const secondsDiff = (dateTwoDate.getTime() - dateOneDate.getTime()) / 1000
  //   const secondsInADay = 86400

  //   return secondsDiff/secondsInADay    
  // }

  const onNewCounterCreated = () => {
    const newCounter: IDateCounter = {
      date,
      type
    }

    console.log(newCounter);
    
  }

  const test = (value: string) => {
    const [date, time] = value.split('T')

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Date Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton id='open-modal' className='secondary' fill="solid" color="tertiary">  <IonIcon slot="end" icon={timeOutline}></IonIcon> Nuevo</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>

      <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => console.log()}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Nuevo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                Tipo de contador: {date} {type}
              </IonCardTitle>
              <IonCardContent className='ion-no-padding'>
                <IonSelect value={type} name='type' onIonChange={(evt: any) => onInputChange(evt)} placeholder='Seleccione el tipo'>
                  <IonSelectOption value='regressive'>Regresiva</IonSelectOption>
                  <IonSelectOption value='progressive'>Progresiva</IonSelectOption>
                </IonSelect>
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className='ion-padding-bottom'>
                Seleccione la fecha
              </IonCardTitle>
              <IonCardContent className='ion-no-padding'>
                <IonDatetime value={date} name='date' onIonChange={(evt: any) => onInputChange(evt)}></IonDatetime>
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton className='secondary' fill="solid" color="tertiary" onClick={onNewCounterCreated}>  <IonIcon slot="end" icon={saveOutline}></IonIcon> Crear</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      </IonModal>

    </IonPage>
  );
};

export default Home;


