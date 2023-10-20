import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '../../src/app/data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(note:Data[] , searchkey:string): Data[] {
    return note.filter((note)=>note.title.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase()));
  }

}
