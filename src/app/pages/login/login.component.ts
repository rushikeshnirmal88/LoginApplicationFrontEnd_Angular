import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/services/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //snack: any;

  constructor(private http:HttpClient,private route:Router,private service:RegistrationService){}

   user=new User();
   msg='';
  ngOnInit(): void {
  
  }

  loginUser()
  {
    if(this.user.emailid=='' ||this.user.password==null)
    {

      Swal.fire("Bad Credentails !", "Login Failed !!!", "error");
    }

    this.service.loginUserFromRemote(this.user).subscribe(
      (data:any)=>
      {
        console.log("Response Recived");
        this.route.navigate(['welcome']);
       Swal.fire("Login !", "Login Successfully !!!", "success");

      },
      (error:any)=>
      {
        console.log("Response Not Recived");
        this.msg="Bad Credentails plsese enter valid Email And Psssword ";
        Swal.fire("Bad Credentails !", "Login Failed !!!", "error");

      }

    );
  }

  goToBack()
  {
    console.log("");
    this.route.navigate(['']);
  }

}


