import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { PigLatinComponent } from "./components/PigLatinComponent";
import { TopTenComponent } from "./components/TopTenComponent";

import { WordService } from "./services/word.service";
import { ToastModule } from "ng2-toastr";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastModule.forRoot()
    ],
    declarations: [
        PigLatinComponent,
        TopTenComponent
    ],
    providers: [
        WordService
    ],
    bootstrap:    [ PigLatinComponent ]
})

export class AppModule { }