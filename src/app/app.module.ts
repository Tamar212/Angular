import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondCovmponentComponent } from './second-covmponent/second-covmponent.component';
import { TextComponent } from './text/text.component';
import { FormsModule } from '@angular/forms';
import { MyFirstComponent } from './my-first/my-first.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BorrowerLIstComponent } from './borrower-list/borrower-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyPipe } from './pipes/my.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { LendingsComponent } from './lendings/lendings.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { RulesAndProceduresComponent } from './rules-and-procedures/rules-and-procedures.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
  pathMatch: 'full'
}, {
  path: 'BookList',
  component: BookListComponent
}, {
  path: 'BorrowerLIst',
  component: BorrowerLIstComponent
}, {
  path: 'BookList/book/:id',
  component: BookDetailsComponent
}, {
  path: 'about',
  component: AboutComponent, children: [{
    path: 'GeneralInformation',
    component: GeneralInformationComponent
  }, {
    path: 'RulesandProcedures',
    component: RulesAndProceduresComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }]
},  {
  path: '**',
  component: ErrorComponent,children:[{
    path:'',
    component:ErrorComponent,
    pathMatch:'full'
  }]
}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondCovmponentComponent,
    TextComponent,
    MyFirstComponent,
    CategoryListComponent,
    BorrowerLIstComponent,
    BookDetailsComponent,
    BookListComponent,
    MyPipe,
    SearchPipe,
    LendingsComponent,
    MenuComponent,
    ErrorComponent,
    AboutComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
