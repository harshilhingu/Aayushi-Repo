import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterdBike } from './pipes/filteringbikebytypes.pipe';
import { FilteringBikeByAuthor } from './pipes/filteringbikesbyauthor.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterdBike,
    FilteringBikeByAuthor,
    HighlightImportantDataDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
