import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id: number = 1; // employer 
  arr : any = [1,2,3,3,4,6,26,627247];
  testData : string = "the quick brown fox jumped the fenced";

  handleChild(e:any){
    console.log(e)
  }
}
