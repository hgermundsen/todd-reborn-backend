import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('handle-request')
    @UseInterceptors(FileInterceptor('audio'))
    async handleRequest(@UploadedFile() audioFile: Express.Multer.File) {
        return this.appService.handleRequest(audioFile);
    }
}
