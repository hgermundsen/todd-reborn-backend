import { Injectable } from '@nestjs/common';
import { SpeechClient } from '@google-cloud/speech';
import * as fs from 'fs';

@Injectable()
export class AppService {
    private readonly speechClient: SpeechClient;

    constructor() {
        this.speechClient = new SpeechClient();
    }
    async handleRequest(audioFile: Express.Multer.File): Promise<string> {
        console.log(audioFile);
        fs.unlink(audioFile.path, (err) => {
            if (err) {
                return console.log('Error occurred while deleting file', err);
            }
        });
        return 'Howdy World! Still working on this piece of code';
    }
}
