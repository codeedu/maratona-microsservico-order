import { Test, TestingModule } from '@nestjs/testing';
import { DriverHttpService } from './driver-http.service';

describe('DriverHttpService', () => {
  let service: DriverHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverHttpService],
    }).compile();

    service = module.get<DriverHttpService>(DriverHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
