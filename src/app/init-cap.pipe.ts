import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCap',
  pure:false
})
export class InitCapPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {

    return  value.join();
  }

}
