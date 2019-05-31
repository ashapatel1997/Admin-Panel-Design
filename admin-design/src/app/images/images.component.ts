import { Component, OnInit } from '@angular/core';
import { Images } from './images';
import { ImagesService } from './images.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private _imagesService: ImagesService,
    private _route: Router,
    private _activateRoute: ActivatedRoute) { }


  listImg: Images[]; //array of images
  fetchImage: Images; //fetch image to display in slider
  imgUrl = ''; 
  imgDescription = '';
  index = 0; //deleted image index
  disabledLeft: boolean; //left slider button
  disabledRight: boolean; //right slider button
  imageIndex: number; //image index 
  length: number; //images array length

  /*array length is not zero then count=true and show table,
  if length is zero then count = false and hide table*/
  count: boolean;

  ngOnInit() {


    if (this._imagesService.getLength() == 0)
    {
      this.count = false;
      this.imgUrl = 'assets/image-not-available.png';
      this.imgDescription = '';
    }

    else {
      this.count = true;
      this.listImg = this._imagesService.getImages();
      this.fetchImage = this._imagesService.getFetchedImage(0);

      this.imageIndex = 1;

      this.length = this.listImg.length;
      this.getNextImage(this.imageIndex);
    }
   
   

  }

  setIndexMinusOne() {
    this._imagesService.setIndexMinusOne();
  }


  //delete image
  deleteImage(image: string) {
    this.index = this._imagesService.deleteImage(image);
    this.length = this.listImg.length;

    if (this.length == 0) {
      this.count = false;
      this.imgUrl = 'assets/image-not-available.png';
      this.imgDescription = '';
    }
    else {
      this.imageIndex = 1;
      this.getNextImage(this.imageIndex);
    }


  }

  //edit image
  editImage(imageUrl: string) {
    this._route.navigate(['images/edit-image', imageUrl]);
  }

  /**
   * get next or privious image index
   * @param n is +1(if user clicks on right slider button) or
   *              -1 (if user clicks on left slider button)
   */
  
  getNext(n) {
    this.imageIndex += n;
    this.getNextImage(this.imageIndex);
  }

  /**get next or previous image to display in slider
   * 
   * @param imageIndex is index+1 
   */
 
  getNextImage(imageIndex: number) {

    //disable left slider button if index is 0
    if ((imageIndex - 1) == 0) {
      this.disabledLeft = true;
    }
    else {
      this.disabledLeft = false;
    }

     //disable both slider button if index is 0 and array length is 1
    if ((imageIndex - 1) == 0 && this.length == 1) {
      this.disabledLeft = true;
      this.disabledRight = true;
    }

     //disable right slider button if index is array length
    if ((imageIndex) == this.length) {
      this.disabledRight = true;
    }
    else {
      this.disabledRight = false;
    }

    this.fetchImage = this._imagesService.getFetchedImage(this.imageIndex - 1);
    this.imgUrl = this.fetchImage.imageUrl;
    this.imgDescription = this.fetchImage.imageDescription;
  }
}
