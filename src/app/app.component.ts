import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

// interface User {
//   name: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // userCol: AngularFirestoreCollection<User>;
  users: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }

}

// export class AppComponent {
//   title = 'app';
//   user: Observable<firebase.User>;
//   users: Observable<any[]>;
//   msgVal: string = '';

//   constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
//     this.afAuth.auth.signInAnonymously();
//     this.user = this.afAuth.authState;
//     this.users = db.collection('users').valueChanges();
//   }

// }
