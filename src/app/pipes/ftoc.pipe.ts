import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ftoc'
})
export class FtocPipe implements PipeTransform {

  transform(value: number,  flag: any): any {
    if(flag == 'C')
    {
       return (value * 1.8) + 32;
    }
    else if(flag == 'F'){
      return ((value - 32)*5)/9;
    }
  }

}
