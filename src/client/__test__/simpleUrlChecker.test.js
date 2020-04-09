const { simpleUrlCheck } = require('../js/simpleUrlChecker');

test('check url format', () => {

  expect(simpleUrlCheck('https://www.susansiow.com')).toBe(true);
  expect(simpleUrlCheck('http://www.susansiow.com')).toBe(true);

  expect(simpleUrlCheck('www.susansiow.com')).not.toBe(true);
  expect(simpleUrlCheck('susansiow.com')).not.toBe(true);
  expect(simpleUrlCheck('susansiow')).not.toBe(true);
  expect(simpleUrlCheck('susan siow')).not.toBe(true);

});