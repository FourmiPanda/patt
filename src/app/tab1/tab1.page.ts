import { Component } from '@angular/core';
import {ModalController, PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public popoverController: PopoverController) {}

  // TODO: Add setting panel

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}

@Component({
  selector: 'app-popover-page',
  template: `
    <ion-list>
      <ion-list-header>Global</ion-list-header>
      <ion-item>
        <ion-label>Sport</ion-label>
        <ion-badge color="success" slot="end">80 %</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Festivity</ion-label>
        <ion-badge color="warning" slot="end">5 %</ion-badge>
      </ion-item>

      <ion-item>
        <ion-label>Art</ion-label>
        <ion-badge color="light" slot="end">0 %</ion-badge>
      </ion-item>
    </ion-list>
  `
})
export class PopoverComponent {

  constructor() {}


}
