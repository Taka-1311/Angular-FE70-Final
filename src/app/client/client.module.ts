import { HeaderComponent } from './../header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMaterialModule } from './../ng_materials/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client/client.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ClientHomeComponent } from './client-home/client-home.component';

const clientRoute: Routes = [
    {
        path: '', component: ClientComponent, children: [
            { path: '', component: ClientHomeComponent },
        ]
    }
]


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgMaterialModule,
        RouterModule.forChild(clientRoute),
    ],
    exports: [
        ClientComponent,
    ],
    declarations: [
        ClientComponent,
        HeaderComponent,
        CarouselComponent,
        ClientHomeComponent,
    ],
})
export class ClientModule { }
