// jest.mock('react-native/Libraries/Utilities/Platform', () => ({
//   OS: 'ios',
//   isTV: false,
// }));

// jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
//   get: () => ({
//     width: 390,
//     height: 844,
//   }),
// }));

describe('platform utility checks', () => {
  const platform = require('../../utility/platform');

  it('should detect iOS platform correctly', () => {
    expect(platform.isIOS).toBe(true);
    expect(platform.isAndroid).toBe(false);
  });

  it('should detect screen dimensions correctly', () => {
    expect(platform.SCREEN_W).toBe(375);
    expect(platform.SCREEN_H).toBe(812);
  });

  it('should detect TV as false', () => {
    expect(platform.isTv).toBe(false);
  });
});
