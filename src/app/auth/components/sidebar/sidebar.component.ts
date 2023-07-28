import { Component, OnInit } from '@angular/core';
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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarShow: boolean = true;
   constructor(private formBuilder: FormBuilder,  private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._auth.clearStorage()
    this._router.navigate(['login']);
  }
}
