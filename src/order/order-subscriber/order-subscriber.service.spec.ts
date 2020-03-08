import { Test, TestingModule } from '@nestjs/testing';
import { OrderSubscriberService } from './order-subscriber.service';

describe('OrderSubscriberService', () => {
  let service: OrderSubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderSubscriberService],
    }).compile();

    service = module.get<OrderSubscriberService>(OrderSubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
