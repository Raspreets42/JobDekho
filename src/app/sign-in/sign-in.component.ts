import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  userEmail: any;
  userPassword: any;

  constructor(private services: ApiService, private router: Router, private toastr: ToastrService) { }

  loginUser(): any {
    let data = {
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }
    this.services.loginUser(data).subscribe( (resp: any) => {
      console.log(resp);
      if(resp.status === true){
        console.log(resp.msg);
        
        this.toastr.success(resp.msg);
      }
    });
  }

}
