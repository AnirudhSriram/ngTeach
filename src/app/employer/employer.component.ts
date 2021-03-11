import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit, OnDestroy {
  @Input() infoFromParent : any;
  @Output() infoFromChild = new EventEmitter<any>()
  constructor() { }
  ngOnDestroy(): void {
  
  }
  
  ngOnInit(): void {
    
  }

  callMe(e : any) {
  console.log(e);
  this.infoFromChild.emit("Hi, this is the info from your child");
  }

}