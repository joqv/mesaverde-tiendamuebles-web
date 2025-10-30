import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvcatalogoComponent } from './bvcatalogo-component';

describe('BvcatalogoComponent', () => {
  let component: BvcatalogoComponent;
  let fixture: ComponentFixture<BvcatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BvcatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BvcatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
