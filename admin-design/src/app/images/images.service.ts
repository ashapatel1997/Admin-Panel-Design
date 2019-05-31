import { Injectable } from '@angular/core';
import { Images } from './images';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  /*
   imagesList object of Images array*/
  public imageList: Images[] = [
    {
      imageUrl: "assets/img-1.jpg",
      imageDescription: "image 1 description here "

    },
    {
      imageUrl: "assets/taj.jpg",
      imageDescription: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. "

    }
   
  ];

  /** fetch entire array of Images */
  public getImages(): Images[] {
    return this.imageList;
  }


  imageIndex: number = -1;

 /* when user clicks on "add new image"
  button, idex will be set to -1 to add new image in array*/
  public setIndexMinusOne() {
    this.imageIndex = -1;
  }

  /**get image details to bind it with edit page form fields
   * 
   * @param image is to find index of image
   */
  getImageDetails(image: string) {
    this.imageIndex = this.imageList.findIndex(i => i.imageUrl == image);
    return this.imageList[this.imageIndex];
  }

  /**save image (either added new or edited one)
   * 
   * @param image object of Images class to save in array
   */
  public saveImage(image: Images) {
    console.log(this.imageIndex);
    
    if (this.imageIndex !== -1) {
      this.imageList[this.imageIndex] = image;
    }
    else {
      this.imageList.push(image);
    }
  }

  /**
   * delete image if use clickes on delete icon
   * @param image to find index of specific image data 
   */
  public deleteImage(image: string) {
    const index = this.imageList.findIndex(i => i.imageUrl === image);

    this.imageList.splice(index, 1);

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
