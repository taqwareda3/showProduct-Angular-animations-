import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiredDate'
})
export class ExpiredDatePipe implements PipeTransform {
 date :any = new Date()
  d=formatDate(this.date,'dd-MM-yyyy', 'en-US')
  transform(value: unknown, ...args: unknown[]): any {
    console.log(value)
    console.log( this.d)
    if(value== this.d){
      return  value = "Not Expired"
    }else{
      return value="Expired"
    }
    
  }

}
