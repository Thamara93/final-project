import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  

  
  hotel = {
    hotelName: '',
    city: '',
    address: '',
    starsQty: '',
    roomsQty: '',
    freeRooms: '',
    roomsPic1: '',
    roomsPic2: '',
    roomsPic3: '',
    descriprion: '',
  };

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
  

  addHotel() {
    this.db.list('hotelsData').push(this.hotel);
    (this.hotel.hotelName = ''),
      (this.hotel.city = ''),
      (this.hotel.address = ''),
      (this.hotel.starsQty = ''),
      (this.hotel.roomsQty = ''),
      (this.hotel.freeRooms = ''),
      (this.hotel.roomsPic1 = ''),
      (this.hotel.roomsPic2 = ''),
      (this.hotel.roomsPic3 = ''),
      (this.hotel.descriprion = '');
  }

  ngOnInit(): void {
    this.hotelsList();
  }

  removeHotel(hotelKey) {
    this.db.list('hotelsData').remove(hotelKey);
  }
}
