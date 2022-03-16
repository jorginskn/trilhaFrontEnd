import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjEmpresa',
})
export class CnpjEmpresaPipe implements PipeTransform {
  transform(value: string): string {
    return (
      value.substring(1, 3) +
      '.' +
      value.substring(3, 6) +
      '.' +
      value.substring(6, 9) +
      ' /' +
      value.substring(9, 13) + ' - ' + value.substring(13 , 15)
    );
  }
}
