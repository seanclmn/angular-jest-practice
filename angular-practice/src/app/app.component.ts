import { Component } from '@angular/core';
import { ThisisaserviceService } from './thisisaservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: ThisisaserviceService) {}

  title = 'not practice';

  serviceVariable (){
    return this.service.variable
  }

  multiply (x:number,y:number) {
    return x*y
  }

}
