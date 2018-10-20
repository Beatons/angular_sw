import { NgModule } from '@angular/core';
import { TickTackComponent } from './tick-tack/tick-tack.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        TickTackComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TickTackComponent
    ]
})

export class TickTackModule {}
