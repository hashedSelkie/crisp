import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  over(event: any){
    let element  = (event.currentTarget as HTMLElement).style;
    let id = (event.currentTarget as HTMLElement).id;
    if(id === "left"){
   element.left = "0vw";
    }
    else{
      element.right = "0vw";
    }

  }

  out(event: any){
    let element  = (event.currentTarget as HTMLElement).style;
    let id = (event.currentTarget as HTMLElement).id;
   
    if(id === "left"){
      element.left = "-330px";
       }
       else{
        element.right = "-335px";
       }
  }
  

  mobileShow(event: any){
    let image  = (event.currentTarget as HTMLElement).id;
    let opacity = (event.currentTarget as HTMLElement).style.opacity;
    console.log(image);
    let slideL = document.getElementById("slideLeft");
    let slideR = document.getElementById("slideRight");

    
    if(image === "leftImage" && opacity !== "0" ){
      (document.getElementById("rightImage") as HTMLElement).style.opacity = "0";

      if((slideR as HTMLElement).style.right !== "0%")
      {
        console.log("slideR should be 40px");
      (slideR as HTMLElement).style.right = "0%";
      }else
      {
        console.log("slideR should be -100%");
        (slideR as HTMLElement).style.right = "-100%";
        (document.getElementById("rightImage") as HTMLElement).style.opacity = "100%";

      }
    }
    if(image === "rightImage" && opacity !== "0"){
      (document.getElementById("leftImage") as HTMLElement).style.opacity = "0";
      if((slideL as HTMLElement).style.left !== "0%")
      {
        console.log("slideL should be 40px");
      (slideL as HTMLElement).style.left = "0%";
      }else
      {
        console.log("slideL should be -100%");
        (slideL as HTMLElement).style.left = "-100%";
        (document.getElementById("leftImage") as HTMLElement).style.opacity = "100%";

      }
    }
  }
}
