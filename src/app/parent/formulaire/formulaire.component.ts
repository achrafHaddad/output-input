import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  get f(){
    return this.formInfo.controls;
  }
  
  @Output() public childEvent = new EventEmitter();

  onSubmit(){
    if (this.formInfo.invalid) {
      return ;
    }
    this.childEvent.emit(this.formInfo.value)
  }

  ngOnInit() {
    this.formInfo = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
