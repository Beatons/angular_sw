import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { always, times, update } from 'ramda';
import { pluck } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tick-tack',
  templateUrl: './tick-tack.component.html',
  styleUrls: ['./tick-tack.component.scss'],
})
export class TickTackComponent implements OnInit {
  readonly gameCollection =
    this.afs.collection('games');

  readonly game$ =
    this.gameCollection.valueChanges().pipe(
      pluck('0'),
    );

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
  ) {
  }

  ngOnInit(): void {
  }

  update(index: number, game: any) {
    let { player, fields } = game;
    fields = update(index, player, fields as any);
    player = player === 'x' ? 'o' : 'x';
    this.gameCollection.doc(game.key).update({ fields, player });
  }

  reset(game: any) {
    const fields = times(always(''), 9);
    const player = 'x';
    this.gameCollection.doc(game.key).update({ fields, player });
  }
}
