import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data: any;

  ngOnInit(): void {
  }
  formData(value) {
    console.log(value);
    this.data = value;
  }

}
