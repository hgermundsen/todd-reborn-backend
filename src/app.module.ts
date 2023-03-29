import { Module } from '@nestjs/common';
import { PulseModule } from 'src/modules/pulse/pulse.module';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads',
        }),
        PulseModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
