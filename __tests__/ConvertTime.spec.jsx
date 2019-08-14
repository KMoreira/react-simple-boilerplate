import convertTime from '../src/Helpers/ConvertTime';

describe('ConvertTime', () => {
  test('should receive 0 and convert to 0:00', () => {
    expect(convertTime(0)).toBe('0:00');
  });

  test('should receive 1 and convert to 0:01', () => {
    expect(convertTime(1)).toBe('0:01');
  });

  test('should receive 210 and convert to 3:30', () => {
    expect(convertTime(210)).toBe('3:30');
  });

  test('should receive 60 and convert to 1:00', () => {
    expect(convertTime(60)).toBe('1:00');
  });
});
