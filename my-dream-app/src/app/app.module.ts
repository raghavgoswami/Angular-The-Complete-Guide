import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'; //ext added by webpack which bundles project automatically
import { SuccessAlertComponent } from './success-alert/success-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [BrowserModule, FormsModule], // add other modules to this modules (import modules in here to make this module leaner)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
