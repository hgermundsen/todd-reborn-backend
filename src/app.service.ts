import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHowdy(): string {
    return 'Howdy World!';
  }
}
