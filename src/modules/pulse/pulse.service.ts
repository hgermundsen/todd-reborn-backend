import { Injectable } from '@nestjs/common';

@Injectable()
export class PulseService {
  getHowdy(): string {
    return 'Howdy World!';
  }
}
