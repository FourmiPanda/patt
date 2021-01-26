import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewChecked{
  constructor(public modalController: ModalController) {}

  //TODO: Add Systeme d'alerte en cas de probleme

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngAfterViewChecked(): void {
    const chat = document.querySelector('#chat');
    chat.scrollTop = chat.scrollHeight;
  }

}


//TODO: Améliorer la modal feedback
@Component({
  selector: 'app-modal-page',
  template: `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Modal Content</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          Adjust Display
        </ion-list-header>

        <ion-item>
          <ion-range value="20">
            <ion-icon slot="start" size="small" name="sunny"></ion-icon>
            <ion-icon slot="end" name="sunny"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min="-200" max="200" pin color="secondary">
            <ion-icon slot="start" size="small" name="contrast"></ion-icon>
            <ion-icon slot="end" name="contrast"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range id="dual-range" dual-knobs pin color="dark">
            <ion-icon slot="start" size="small" name="brush"></ion-icon>
            <ion-icon slot="end" name="brush"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min="1000" max="2000" step="100" value="1400" snaps color="danger">
            <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon>
            <ion-icon slot="end" color="danger" name="thermometer"></ion-icon>
          </ion-range>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class ModalPage {

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
