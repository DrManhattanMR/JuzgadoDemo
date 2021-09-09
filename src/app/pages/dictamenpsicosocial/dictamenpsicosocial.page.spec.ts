import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DictamenpsicosocialPage } from './dictamenpsicosocial.page';

describe('DictamenpsicosocialPage', () => {
  let component: DictamenpsicosocialPage;
  let fixture: ComponentFixture<DictamenpsicosocialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DictamenpsicosocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DictamenpsicosocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
