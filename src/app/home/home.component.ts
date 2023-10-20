import { Component, OnInit } from '@angular/core';
import { NotsService } from '../nots.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _NotsService: NotsService) {}
  DataNots: any[] = [];
  noteId: any;
  searchkey: string = '';

  EditeNotsfrom: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });
  EditeNote(EditeNotsfrom: FormGroup) {
    this._NotsService.UpdataNote(EditeNotsfrom.value, this.noteId).subscribe({
      next: (res) => {
        console.log(res);
        this.DataNots = res.notes;
        this.getNots();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getNots() {
    this._NotsService.getNote().subscribe({
      next: (res) => {
        console.log(res);
        this.DataNots = res.notes;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getNots();
  }
  addNotFrom: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });
  addNots(addNotFrom: FormGroup) {
    this._NotsService.addNots(addNotFrom.value).subscribe({
      next: (res) => {
        console.log(res);
        this.getNots();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getNotedId(id: string) {
    this.noteId = id;
    console.log(this.noteId);
  }
  getdelet(id:string) {
    this._NotsService.DeleteNote(this.noteId).subscribe({
      next: (res) => {
        this.noteId=id;
        this.getNots();
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
