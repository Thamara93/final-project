import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hotels-information',
  templateUrl: './hotels-information.component.html',
  styleUrls: ['./hotels-information.component.scss']
})
export class HotelsInformationComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {}

  hotels = [];
  hotelsList() {
    this.db
      .list('hotelsData')
      .snapshotChanges()
      .pipe(
        map(data => {
          return data.map(info =>
          (
            { key: info.key, ...info.payload.val() as {} }
          )
          )
        }
        )
      ).subscribe(data => {
        this.hotels = data;
        console.log(this.hotels)
        }
      )
  }

  ngOnInit(): void {
    this.hotelsList();
  }

}
