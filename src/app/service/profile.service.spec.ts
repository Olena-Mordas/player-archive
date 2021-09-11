import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { PlayerProfile } from '../model/player-profile';
import * as json_data from './mock_data.json' ;

describe('ProfileService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ProfileService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProfileService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return profile', () => {
    const mock_data = json_data;
    //const profile: PlayerProfile = JSON.parse(mock_data);

    service.getPlayerProfile('profile-111.json').subscribe(data =>{
      expect(data).toEqual(mock_data);
    })

    const testRequest = httpTestingController.expectOne('https://web-sandbox.onefootball.com/assignments/player/profile/profile-111.json');
 
    testRequest.flush(mock_data);
  });
});
