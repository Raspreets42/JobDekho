import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  newPass: any;
  cNewPass: any;

  constructor(private services: ApiService, private router: Router, private toastr: ToastrService) {
  }

  changePassword(): any{
    let data = {
      userNewPassword: this.newPass,
      userCNewPassword: this.cNewPass,
      token: localStorage.getItem('token')
    }
    this.services.changePass(data).subscribe( (resp: any) => {
      console.log(resp);
      if(resp.status === true){
        console.log(resp.msg);
        this.toastr.success(resp.msg);
      }
    });
  }
}
