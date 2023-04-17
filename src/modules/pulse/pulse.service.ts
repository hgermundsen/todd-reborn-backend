import { Injectable } from '@nestjs/common';

@Injectable()
export class PulseService {
    getHeartbeat(): string {
        return 'lub-dub, lub-dub, lub-dub';
    }
}
