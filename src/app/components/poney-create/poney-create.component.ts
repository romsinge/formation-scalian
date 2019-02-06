import { poneyImgValidator } from './../../utils/validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sca-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  errorMessages = {
    required: 'Ce champ est requis',
    poneyImg: 'Doit finir par .gif'
  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

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
    this.dataService.createPoney({
      distance: 0,
      ...this.poneyForm.value
    }).subscribe(poney => {
      console.log('PONEY CREATED : ', poney)
      this.router.navigateByUrl('')
    })
  }

}
