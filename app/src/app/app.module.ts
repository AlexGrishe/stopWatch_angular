import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputToCountdownDirective } from './directives/input-to-countdown.directive';
import { TimeInputComponent } from './components/time-input/time-input.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    InputToCountdownDirective,
    TimeInputComponent,
    CountdownComponent,
    TimeFormatPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
