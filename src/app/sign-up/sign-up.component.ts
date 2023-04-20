import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userName: any;
  userEmail: any;
  userPhone: any;
  userPassword: any;
  userCPassword: any;

  constructor(private services: ApiService , private router: Router , private toastr: ToastrService) {

  }

  registerUser(): any {
    let data = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      userPassword: this.userPassword,
      userCPassword: this.userCPassword
    }
    this.services.registerUser(data).subscribe( (resp: any) => {
      console.log(resp);
      if(resp.status === true){
        console.log(resp.msg);
        
        this.toastr.success(resp.msg);
      }
      
    });

  }


}
