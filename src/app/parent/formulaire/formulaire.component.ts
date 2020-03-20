import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormArray, Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.css"]
})
export class FormulaireComponent implements OnInit {
  formInfo: FormGroup;

  users = [];

  constructor() {}

  @Output() public childEvent = new EventEmitter();

  onSubmit() {
    this.childEvent.emit(this.users);
  }
  addUser() {
    if (this.formInfo.invalid) {
      return;
    } else {
      console.log(this.formInfo.value);
      console.log(this.users);
      this.users.push(this.formInfo.value);
      this.formInfo.reset();
    }
  }

  ngOnInit() {
    this.formInfo = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      age: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }
}
