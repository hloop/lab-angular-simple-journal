import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryListService {

  constructor(private http: Http) { }

  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
  }

  postEntry(newEntry) {
    return this.http.post('http://localhost:3000/api/journal-entries', newEntry)
      .map((res) => res.json());
  }

  deleteEntry(entryID) {
    return this.http.post ('http://localhost:3000/api/journal-entries/delete', {entryID: entryID})
      .map((res) => res.json());
  }
}
