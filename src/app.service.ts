import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from CI/CD!';
  }

  getVersion(): string {
    return process.env.APP_VERSION ?? 'dev';
  }
}