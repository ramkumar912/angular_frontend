import { Component, VERSION, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../../services/api.service'
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  uName:any='';
  errorMessage: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
 
  submitted = false;
  constructor(private formBuilder: FormBuilder,  private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
    this.isUserLogin(); 
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
  

    if (this.form.invalid) {
      return;
    }else{
      this._api.postTypeRequest('user/login', this.form.value).subscribe((res: any) => {     
        if (res.data!='') { 
          console.log('res : ',res.data);
          console.log('Your form data : ',JSON.stringify(res.data));
          this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
          this._auth.setDataInLocalStorage('token', res.token); 
          this.uName= res.data[0].username;
          alert(this.uName)
          this._router.navigate(['dashboard']);
        }else{
          alert("data is no")
        }
      })
    }

    
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null){
      this.isLogin = true;
      this._router.navigate(['dashboard']);
    }else{
      this.isLogin = false;
      this._router.navigate(['']);
    }
  }
 
}
