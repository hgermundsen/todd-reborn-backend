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

    describe('pulse', () => {
        it('should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('should return the expected heartbeat', () => {
            expect(controller.getHeartbeat()).toBe('lub-dub, lub-dub, lub-dub');
        });
    });
});
