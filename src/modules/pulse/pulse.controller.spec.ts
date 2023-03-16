import { Test, TestingModule } from '@nestjs/testing';
import { PulseController } from './pulse.controller';
import { PulseService } from './pulse.service';

describe('PulseController', () => {
  let controller: PulseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PulseController],
      providers: [PulseService],
    }).compile();

    controller = module.get<PulseController>(PulseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(controller.getHowdy()).toBe('Howdy World!');
  });
});
