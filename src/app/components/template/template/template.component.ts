import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @Input() subtitle: string

  constructor() { }

  ngOnInit(): void {
  }

}
