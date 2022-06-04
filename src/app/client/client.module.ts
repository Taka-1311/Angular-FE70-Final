import { HeaderComponent } from './../header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMaterialModule } from './../ng_materials/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './client-home/client-home.component';

const clientRoute: Routes = [
    {
        path: '', component: ClientHomeComponent, children: [
            { path: 'home', component: ClientHomeComponent },
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
    ],
})
export class ClientModule { }
