beforeEach(() => {

});

describe('Config class tests', () => {
  test('initializes with default configurations', async () => {
    const Config = (await import('../../config/Config')).default;
    const config = Config.getInstance();
    expect(config.pauseInTest).toBe(15000);
    expect(config.userName).toBe('<CHANGE ME>');
    expect(config.config.chromeDriverExec).toBe('chromedriver');
  });

  test('environment variables override configurations', async () => {
    const Config = (await import('../../config/Config')).default;
    Config.instance = null;
    process.env.ENV = 'windows';
    const config = Config.getInstance();
    expect(config.config.chromeDriverExec).toBe('chromedriver.exe');
  });
});
