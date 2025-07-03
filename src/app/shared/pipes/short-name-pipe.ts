import { Pipe, PipeTransform, StreamingResourceOptions } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const fullname = value.split(" ");
    if (fullname.length === 3) {
      const firstLetter: string = fullname[0].charAt(0);
      const lastLetter: string = fullname[2].charAt(0);
      return (firstLetter + lastLetter).toUpperCase();
    }else if(fullname.length === 2) {
      const firstLetter: string = fullname[0].charAt(0);
      const lastLetter: string = fullname[1].charAt(0);
      return (firstLetter + lastLetter).toUpperCase();
    }else if(fullname.length === 1) {
      const firstLetter: string = fullname[0].charAt(0);
      const lastLetter: string = fullname[0].charAt(1);
      return (firstLetter + lastLetter).toUpperCase();
    }else{
      return '--'
    }
  }

}
