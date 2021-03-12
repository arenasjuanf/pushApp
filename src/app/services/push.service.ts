import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private oneSignal: OneSignal
  ) { }

  init(){
    this.oneSignal.startInit('86744467-2fe4-43dd-aef3-89a6567204f0', '217994460793');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((n) => {
      console.log('notificacion recibida: ', n)
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      console.log('notificación abierta');
    });

    this.oneSignal.endInit();

  }
  
}
