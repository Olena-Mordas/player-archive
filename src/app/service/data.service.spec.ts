import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { PalyerData} from '../model/player-data';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DataService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data for fabio', () => {
    // check if data is returned as expected for active player
    const mock_data: PalyerData = {
      id: "fabio",
      active: "true",
      "profile-id": "profile-111.json"
    };

    service.getPlayerData('fabio').subscribe(data =>{
      expect(data).toEqual(mock_data);
    })

    //mock the call
    const testRequest = httpTestingController.expectOne('https://web-sandbox.onefootball.com/assignments/player/data/fabio.json');
    testRequest.flush(mock_data);
  });

  it('should return 403 for francesco',()=>{
    // check if the returned status is 403
    const mockErrorResponse = { status: 403, statusText: 'Forbidden' };
    
    let response: any;
    let errResponse: any;

    service.getPlayerData('francesco').subscribe(data => 
      response = data, 
      err =>{
        errResponse = err;
        expect(errResponse).toBe(mockErrorResponse);
      } 
    );
    
    const testRequest = httpTestingController.expectOne('https://web-sandbox.onefootball.com/assignments/player/data/francesco.json');
 
    testRequest.flush(mockErrorResponse);
    
  });
});
