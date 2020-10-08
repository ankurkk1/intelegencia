import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //firebase.initializeApp('intelegencia-8899d');
    var userId = firebase.auth().currentUser.uid;

    console.log(userId);
    firebase.database().ref('data').on('value',(snap)=>{
      console.log(snap.val());
    });
  }
  signOut() {
    this.authenticationService.SignOut();
    this.router.navigateByUrl('/home');
  }

}
