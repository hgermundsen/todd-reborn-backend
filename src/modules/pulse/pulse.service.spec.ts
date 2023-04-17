import { Test, TestingModule } from '@nestjs/testing';
import { PulseService } from './pulse.service';

describe('PulseService', () => {
    let service: PulseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PulseService],
        }).compile();

        service = module.get<PulseService>(PulseService);
    });

    describe('getHeartbeat', () => {
        it('should be defined', () => {
            expect(service).toBeDefined();
        });

        it('should return the expected heartbeat', () => {
            expect(service.getHeartbeat()).toBe('lub-dub, lub-dub, lub-dub');
        });
    });
});
