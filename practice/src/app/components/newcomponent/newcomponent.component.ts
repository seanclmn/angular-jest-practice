import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit{
  @Input() todo: string = ''

  constructor(){}

  ngOnInit(): void {
  }


}
