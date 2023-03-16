import { Module } from '@nestjs/common';
import { PulseModule } from 'src/modules/pulse/pulse.module';

@Module({
  imports: [PulseModule],
})
export class AppModule {}
