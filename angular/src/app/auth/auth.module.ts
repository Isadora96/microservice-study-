import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './components/auth.component';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        AuthComponent
    ],
})

export class AuthModule {}