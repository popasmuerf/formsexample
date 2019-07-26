import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import {User} from './models/user' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'formsexample';

  //form related fields
  userForm: FormGroup ;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

   /*
  user: User = {
    firstName: 'foo',
    lastName: 'bar',
    role: 'Guest',
    notes: undefined
  };
  */

  constructor(){
    // tslint:disable-next-line: label-position
    /*
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.pattern('\w{10}')]],
      lastName : ['',[Validators.required]],
      role: ['this.user.role', [Validators.required]],
      notes: ['this.user.notes', [Validators.maxLength(45)]]

    };
    */
  }

  ngOnInit() {
    this.userForm = new FormGroup({
        firstName: new FormControl('', Validators.compose([
          //Validators.required,
          Validators.pattern('^\\w{10}$')
      ])),
        lastName: new FormControl('', Validators.compose([
          //Validators.required,
          Validators.pattern('^\\w{10}$')
        ]))
    });
  }


  logFormValue(){
    console.log(this.userForm);
  }

}
//R3dB1ack!
