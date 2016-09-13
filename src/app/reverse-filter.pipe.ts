import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReverseFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if (value) {
            let copy = value.slice(); 
            return copy.reverse();   
        }
        return value;

  }

}
