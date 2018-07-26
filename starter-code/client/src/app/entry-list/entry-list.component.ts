import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../services/entry-list.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  entryList: any;
  allTheEntries:any;

  constructor(entryList: EntryListService) {
    this.entryList = entryList;
    this.loadEntries();
  }

  loadEntries() {
    this.entryList.getEntries()
    .subscribe(entries => this.allTheEntries = entries);
  }

  postComment(title, content) {
    let newEntry = {
      title: title.value,
      content: content.value,
      date: new Date()
    }
    this.entryList.postEntry(newEntry)
    .subscribe((result) => {
      this.loadEntries();
    })
  };

  deleteEntry(entryID) {
    this.entryList.deleteEntry(entryID)
    .subscribe((result) => {
      this.loadEntries();
    })
  }
  
  ngOnInit() {}
}
