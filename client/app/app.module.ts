import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToastModule } from "ng2-toastr";

import { PigLatinComponent } from "./components/PigLatinComponent";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ToastModule,
        ReactiveFormsModule
    ],
    declarations: [
        PigLatinComponent
    ],
    providers: [
    ],
    bootstrap:    [ PigLatinComponent ]
})

export class AppModule { }