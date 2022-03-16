import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRotasComponent } from './componente-rotas.component';

describe('ComponenteRotasComponent', () => {
  let component: ComponenteRotasComponent;
  let fixture: ComponentFixture<ComponenteRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteRotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
