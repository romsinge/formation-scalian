import { DataService } from './../services/data.service';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export const poneyImgValidator = (control: FormControl): ValidationErrors | undefined => {

  return (!!control.value && RegExp('.+\.gif$').exec(control.value)) ?
    undefined : {
      poneyImg: true
    }

}

export const asyncPoneyName = (dataService: DataService) => {
  return (control: FormControl): Observable<ValidationErrors | undefined> => {

    return dataService.ponies.pipe(map(ponies => {
      if(ponies.find(poney => poney.name === control.value)) {
        return {
          asyncPoneyName: true
        }
      } else {
        return undefined
      }
    }))

  }
}