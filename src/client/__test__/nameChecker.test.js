const { checkForName } = require('../js/nameChecker');

test('check for name', () => {

  expect(checkForName('Picard')).toBe(true);
  expect(checkForName('Susan')).not.toBe(true);

});