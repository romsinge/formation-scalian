import { poneyImgValidator } from './../../utils/validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sca-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  errorMessages = [
    {
      name: 'required',
      message: 'Ce champ est requis'
    },
    {
      name: 'poneyImg',
      message: 'Doit finir par .gif'
    }
  ]

  constructor() { }

  ngOnInit() {

    this.poneyForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      img: new FormControl('', [
        Validators.required,
        poneyImgValidator
      ])
    })

  }

  handleSubmit() {
    console.log('SUBMIT', this.poneyForm)
  }

}
