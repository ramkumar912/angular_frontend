import { Component, VERSION, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../../../services/api.service'
import { AuthService } from '../../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addForm:any;
  loader : boolean = false;
  isSubmitted:boolean=false;
  product_file:any;
  product_file_name:any='';
  constructor(private formBuilder: FormBuilder,public router : Router, private _api: ApiService,) {
    this.addForm = FormGroup;
   }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      product_name: ['',Validators.required],
      product_cat: ['',Validators.required],
      qty: ['',Validators.required],
      price: ['',Validators.required],
      customFile:[''],
      vid_url:[''],
      product_desc:['',Validators.required],
      status:['',Validators.required],
    })
  }
  productimage($event:any){
    let files = $event.target.files[0];     
    this.product_file = files;
    var ext = files.name.substring(files.name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'jpg'  || ext.toLowerCase() == 'png'  ) {
      var reader = new FileReader();
      this.product_file_name=$event.target.files[0];
      //console.log(this.profile_file)
    } else {         
     alert("Error")
    } 
  }
  addproduct(val:any){  
    const formdata = new FormData();

    formdata.append('file', this.product_file);


    this._api.postTypeRequest('file', formdata).subscribe((res: any) => {     
      if (res.data!='') { 
        console.log('res : ',res.data);
        console.log('Your form data : ',JSON.stringify(res.data));          
 
      }else{
        alert("data is no")
      }
    });

    this.isSubmitted = true;
    if(this.addForm.valid){
      let senddata={
        product_name:val.product_name,
        product_cat:val.product_cat,
        qty:val.qty,
        price:val.price,
        file:this.product_file,
        vid_url:val.vid_url,
        product_desc:val.product_desc,
        status:val.status
      }
    
      
      
    } else{
      return;
    }

  }

}
