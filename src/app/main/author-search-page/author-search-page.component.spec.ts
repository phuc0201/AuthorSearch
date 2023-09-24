import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSearchPageComponent } from './author-search-page.component';

describe('AuthorSearchPageComponent', () => {
  let component: AuthorSearchPageComponent;
  let fixture: ComponentFixture<AuthorSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorSearchPageComponent]
    });
    fixture = TestBed.createComponent(AuthorSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
