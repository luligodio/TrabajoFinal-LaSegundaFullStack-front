import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// themes
import { ThemeModule } from './styles/themes/theme.module';
import { lightTheme } from './styles/themes/light-theme';
import { darkTheme } from './styles/themes/dark-theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'darktheme'
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
