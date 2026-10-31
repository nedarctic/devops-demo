import { describe, it, expect, afterEach } from 'vitest';
import { AppService } from './app.service.js';

describe('AppService', () => {
  const service = new AppService();

  afterEach(() => {
    delete process.env.APP_VERSION;
  });

  it('returns a greeting', () => {
    expect(service.getHello()).toBe('Hello from CI/CD!');
  });

  it('reports the version from the environment', () => {
    process.env.APP_VERSION = '1.2.3';
    expect(service.getVersion()).toBe('1.2.3');
  });

  it('falls back to dev', () => {
    expect(service.getVersion()).toBe('dev');
  });
});
