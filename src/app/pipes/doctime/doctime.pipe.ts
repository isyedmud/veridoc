import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctime'
})
export class DoctimePipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    let result = "";
    let d = new Date(value);
    let minVal: any = d.getMinutes();
    minVal = minVal < 10 ? '0' + minVal : minVal;

    let hourVal = d.getHours();
    var ampm = hourVal >= 12 ? 'pm' : 'am';
    hourVal = hourVal % 12;
    hourVal = hourVal ? hourVal : 12;

    let dayVal = d.getDate();
    let monVal = d.getMonth() + 1;
    let yearVal = d.getFullYear();

    if(args == true) {
      result = monVal + "/" + dayVal + "/" + yearVal + " " + hourVal + ":" + minVal + " " + ampm;
    } else {
      result = monVal + "/" + dayVal + "/" + yearVal;
    }
    return result;
  }

}
