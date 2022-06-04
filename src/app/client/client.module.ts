import { HeaderComponent } from './../header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMaterialModule } from './../ng_materials/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './client/client.component';
import { CarouselComponent } from '../carousel/carousel.component';

const clientRoute: Routes = [
    {
        path: '', component: ClientHomeComponent, children: [
            { path: 'carousel', component: CarouselComponent },
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
        ClientHomeComponent,
        HeaderComponent,
        CarouselComponent
    ],
})
export class ClientModule { }
