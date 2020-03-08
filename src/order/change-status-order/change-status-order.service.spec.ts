import { Test, TestingModule } from '@nestjs/testing';
import { ChangeStatusOrderService } from './change-status-order.service';

describe('ChangeStatusOrderService', () => {
  let service: ChangeStatusOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangeStatusOrderService],
    }).compile();

    service = module.get<ChangeStatusOrderService>(ChangeStatusOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
