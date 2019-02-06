import { FormControl } from '@angular/forms';

export const poneyImgValidator = (control: FormControl) => {

  return (!!control.value && RegExp('.+\.gif$').exec(control.value)) ?
    undefined : {
      poneyImg: true
    }

}