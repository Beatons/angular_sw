import { Component, OnInit } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tick-tack',
  templateUrl: './tick-tack.component.html',
  styleUrls: ['./tick-tack.component.scss'],
})

export class TickTackComponent implements OnInit {
  array: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
  ) {
  }

  ngOnInit(): void {
    this.array = this.afs.collection(`games`, ref => {
      const q: Query = ref;
      return q;
    }).valueChanges();
  }
}
