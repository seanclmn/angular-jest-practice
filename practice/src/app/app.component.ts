import { Component } from '@angular/core';
import { ThisisaserviceService } from './thisisaservice.service';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [LogDirective],
})
export class AppComponent {
  constructor(private service: ThisisaserviceService) {}

  title = 'not practice';

  todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"]

  serviceVariable (){
    return this.service.variable
  }

  multiply (x:number,y:number) {
    return x*y
  }

  addTodo () {
    this.todos.push('new todo')
  }

}
