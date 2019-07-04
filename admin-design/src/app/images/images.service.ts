import { Injectable } from '@angular/core';
import { Images } from './images';



interface originalContent {
  id: number;
  imageUrl: string;
  imageDescription: string;
}


@Injectable({
  providedIn: 'root'
})




export class ImagesService {

  constructor() { }

  //instance of the originalContent Interface
  originalList: originalContent[] = [];

  //imagesList object of Images array
  public imageList: Images[] = [];

  //variable for "for loop"
  i: number;

  //find maximum id of image
  maxId: number;

   /** fetch entire array of Images */
  public getImages(): Images[] {
    return this.imageList;
  }

  /**
   * Save image 
   * @param image object of the image class
   */

  public saveImage(image: Images) {

  /*image added with undefined id*/
    if (image.id === undefined) {

      /*if length is zero then assign id=maxId (i.e:maxId=1)*/
      if (this.imageList.length == 0) {
        this.maxId = 1;
        image.id = this.maxId;
        this.imageList.push(image);
        this.originalList.push(image);
      }

      /*else id=maxId+1*/
      else {
        this.maxId = this.imageList.reduce(function (i1, i2) { return (i1 > i2) ? i1 : i2 }).id;
        image.id = this.maxId + 1;

        this.imageList.push(image);
        this.originalList.push(image);
        
      }
      
    }

    else {
      //edit image
      const index = this.imageList.findIndex(i => i.id == image.id);
      this.imageList[index] = image;
      

     //comparision of original and edited content
      for (this.i = 0; this.i < this.originalList.length; this.i++) {
        if (!(this.originalList[this.i].imageUrl.match(this.imageList[this.i].imageUrl)) || !(this.originalList[this.i].imageDescription.match(this.imageList[this.i].imageDescription))) {
            this.imageList[this.i].isChanges = true;
          }
          else {
            this.imageList[this.i].isChanges = false;
          }
      }
    }
  }

  /**get image based on id
   * 
   * @param id of the image, selected for edit
   */
  public getImage(id: number) {
    const index = this.imageList.findIndex(i => i.id == id);
    return this.imageList[index];
  }

  /**
   * delete image
   * @param id of selected image
   */
  deleteImage(id: number) {
    const index = this.imageList.findIndex(i => i.id === id);
    this.imageList.splice(index, 1);
    this.originalList.splice(index, 1);
 
    return index;

  }


  /**fetch image URL and description of index to disply it in slider
   * 
   * @param n is array index of image that will be shown in slider
   */
  public getFetchedImage(n: number) {
    return this.imageList[n];
  }

  /** length of imageList array*/
  public getLength() {
    return this.imageList.length;
  }


  

}
