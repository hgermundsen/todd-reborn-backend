import { Controller, Get } from '@nestjs/common';
import { PulseService } from './pulse.service';

@Controller('pulse')
export class PulseController {
    constructor(private readonly pulseService: PulseService) {}

    @Get()
    getHeartbeat(): string {
        return this.pulseService.getHeartbeat();
    }
}
