import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/services/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user= new User();

  constructor(private route:Router,private service:RegistrationService){}
  ngOnInit(): void {
    
  }

  registerUser()
  {
    if(this.user.emailid==null||this.user.username==null||this.user.password==null)
    {
      Swal.fire("Error!", "Registration Failed !!!", "error");
    }
    else
    {
      this.service.AddUserToRemote(this.user).subscribe(
        (data:any)=>
        {
  
          this.route.navigate(['login']);
          console.log("User Registration Successfully");
          Swal.fire("Done !", "RegistationSuccessfully !!!", "success");
        },
  
        (error:any)=>{
          console.log("User Registration Failed");
          Swal.fire("Bad Credentails !", "Registation Failed !!! Email Id Must Be Unique", "error");
        }
  
      )
    }
    
  }

  goToBack()
  {
    console.log("");
    this.route.navigate(['login']);
  }
}
