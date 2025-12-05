import RegistrationSystem from '../index';

describe('wix-registration-system basic', () => {
  test('RegistrationSystem can be constructed', () => {
    const rs = new RegistrationSystem({ debug: false });
    expect(rs).toBeDefined();
  });
});
