import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Constants
import { Assets } from '../../shared/constants/assets.constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public assets = Assets;
  items;

  constructor(private angularFireStore: AngularFirestore) {
    this.angularFireStore.collection('posts').valueChanges().subscribe(data => {
      console.log(data);
      this.items = data;
    });

    let obj = {
      id: 1,
      imgs: [
          "https://via.placeholder.com/350",
          "https://via.placeholder.com/350"
      ],
      title: "Viagem para praia",
      user: "Kaio Espindola"
    }

    // this.angularFireStore.collection('posts').add(obj);
    let postTeste = this.angularFireStore.collection('posts').doc('wvRmcoEZZxQutpfHhpQV');

    postTeste.update({
      id: 5,
      imgs: [
          "https://via.placeholder.com/350",
          "https://via.placeholder.com/350"
      ],
      title: "Viagem para Campos",
      user: "Sarah Diniz"
    });
    console.log('deu bom?', this.angularFireStore.collection('posts').doc('GESV3cOU034n1jjr1BBJ').delete());
  }

}
