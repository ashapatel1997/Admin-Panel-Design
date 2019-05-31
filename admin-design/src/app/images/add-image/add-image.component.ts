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

  //instance of the Images class
  image: Images;
 

  constructor(private _imagesService: ImagesService,
    private _router: Router, private _activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit() {

    this.image = new Images();

    //fetch image id from router link and get details if exists
    this._activatedRoute.paramMap.subscribe(e => {
      const imgId = +e.get('id');
      console.log(imgId);
      if (imgId) {
        this.getImg(imgId);
      }
    });


  }

  /**
   * fetch details of the image selected for edit the content
   * @param imgId id of the image that is to be edited
   */
  getImg(imgId: number) {
   
    if (imgId === 0) {
      this.image = { id:null, imageUrl: null, imageDescription: null };
    }
    else {
     
      this.image = this._imagesService.getImage(imgId);
   
    }
  }

  //function call on save button click
  saveImage() {
    console.log("saved image id=", this.image.id);
    this._imagesService.saveImage(this.image);
    this._router.navigate(['images']);
  }


  //function call on cancel button click
  cancel() {
    this._router.navigateByUrl('/images');
  }
}
