import { Component } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}

@Component({
  template: `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          Ma personnalité
        </ion-list-header>



        <ion-item>
          <ion-label>Âge</ion-label>
          <ion-range min="0" max="100" pin color="secondary">
            <ion-icon  slot="start" size="small" name="egg-outline"></ion-icon>
            <ion-icon slot="end" name="skull-outline"></ion-icon>
          </ion-range>
        </ion-item>


        <p style="padding: 10px">
          <ion-chip outline color="primary">
            <ion-icon name="game-controller-outline"></ion-icon>
            <ion-label>Video games</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="secondary">
            <ion-icon name="wine"></ion-icon>
            <ion-label>Nightlife</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="tertiary">
            <ion-icon name="restaurant"></ion-icon>
            <ion-label>Dining</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="dark">
            <ion-icon name="videocam"></ion-icon>
            <ion-label>Entertainment</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-input placeholder="Enter what you like ..."></ion-input>
        </p>
      </ion-list>
    </ion-content>
  `,
  selector: 'app-modal-settings'
})
export class SettingModalPage {
  constructor(public modalController: ModalController, public toastController: ToastController) {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
    this.toastPresent();
  }

  async toastPresent() {
    const toast = await this.toastController.create({
      message: 'Votre personnalité à été modifié.',
      duration: 2000
    });
    await toast.present();
  }
}
