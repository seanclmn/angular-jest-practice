import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'practice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('not practice');
  });

  test('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content .card-container span')?.textContent).toContain('Learn Angular');
  });

  it('should have a p tag', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar p')?.textContent).toContain('this is a p tag');

  })

  test.each([1,2,3,4,5,5,6,7])("should multiply numbers",(elem)=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance
    
    expect(component.multiply(4,elem)).toBe(4*elem)
    
  })

  test("should return service variable",()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance
    expect((component.serviceVariable())).toBe("variable")
  })

});
