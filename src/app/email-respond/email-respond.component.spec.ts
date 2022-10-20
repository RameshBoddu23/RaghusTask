import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRespondComponent } from './email-respond.component';

describe('EmailRespondComponent', () => {
  let component: EmailRespondComponent;
  let fixture: ComponentFixture<EmailRespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailRespondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
