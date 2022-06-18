import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMaterialModule } from './../ng_materials/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client/client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const clientRoute: Routes = [
    {
        path: '', component: ClientComponent, children: [
            { path: '', component: ClientHomeComponent },
            { path: 'detail', component: MovieDetailComponent }
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
        ClientHomeComponent,
        FooterComponent,
        MovieDetailComponent
    ],
})
export class ClientModule { }
