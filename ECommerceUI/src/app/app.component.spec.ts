// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { CommonModule } from '@angular/common';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         CommonModule,
//         HeaderComponent,
//         FooterComponent
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'ECommerceUI'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('ECommerceUI');
//   });

//   it('should render header and footer components', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('app-header')).not.toBeNull();
//     expect(compiled.querySelector('app-footer')).not.toBeNull();
//   });

//   it('should render router-outlet', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('router-outlet')).not.toBeNull();
//   });
// });
