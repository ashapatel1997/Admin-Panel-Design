import { Component, OnInit } from '@angular/core';
import { Images } from '../images';
import { ImagesService } from '../images.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  image: Images; 

  constructor(private _imagesService: ImagesService,
    private _router: Router, private _activatedRoute: ActivatedRoute,
   ) { }

  ngOnInit() {


    this.image = new Images();

    //fetch imageName from router link and get details if exists
    this._activatedRoute.paramMap.subscribe(e => {
      const imageName = e.get('imageUrl');
      if (imageName) {
        this.getImgDetails(imageName);
       
      }
    });


  }

  getImgDetails(imageName:string) {
    this.image = this._imagesService.getImageDetails(imageName);
  }

  //function call on save button click
  saveImage() {
    this._imagesService.saveImage(this.image);
    this._router.navigate(['images']);
  }


  //function call on cancel button click
  cancel() {
    this._router.navigateByUrl('/images');
  }
}
