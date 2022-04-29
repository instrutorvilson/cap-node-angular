import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  /** Ola Mundo Danado */
  transform(value: any, ...args: any[]): any {
    let palavras = value.split(' ')

    let frase = ''
    for(let p of palavras){
       frase += this.capitalize(p) + ' ';
    }

    return frase
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }
}
