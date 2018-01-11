import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

interface User {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userCol: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private db: AngularFirestore) {
   
  }

  ngOnInit(){
    this.userCol = this.db.collection('users');
    this.users = this.userCol.valueChanges();
    
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
