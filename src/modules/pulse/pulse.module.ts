import { Module } from '@nestjs/common';
import { PulseService } from './pulse.service';
import { PulseController } from './pulse.controller';

@Module({
    controllers: [PulseController],
    providers: [PulseService],
})
export class PulseModule {}
