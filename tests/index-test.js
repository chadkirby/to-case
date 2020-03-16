let test = require('tape');
let { toSnake, toScreamingSnake, toKebab, toCamel, toUpperCamel } = require('../index');

test(`functions exist`, (assert) => {
  assert.ok(toSnake, `toSnake exists`);
  assert.ok(toScreamingSnake, `toScreamingSnake exists`);
  assert.ok(toKebab, `toKebab exists`);
  assert.ok(toCamel, `toCamel exists`);
  assert.ok(toUpperCamel, `toUpperCamel exists`);
  assert.end();
});

test(`toSnake works`, (assert) => {
  assert.equal(
    toSnake('zero'),
    'zero'
  );
  assert.equal(
    toSnake('ZEROOne'),
    'zero_one'
  );
  assert.equal(
    toSnake('oneTwo'),
    'one_two'
  );
  assert.equal(
    toSnake('TwoThree'),
    'two_three'
  );
  assert.equal(
    toSnake('three-four'),
    'three_four'
  );
  assert.equal(
    toSnake('four_five'),
    'four_five'
  );
  assert.equal(
    toSnake('FIVE_SIX'),
    'five_six'
  );
  assert.end();
});

test(`toScreamingSnake works`, (assert) => {
  assert.equal(
    toScreamingSnake('zero'),
    'ZERO'
  );
  assert.equal(
    toScreamingSnake('ZEROOne'),
    'ZERO_ONE'
  );
  assert.equal(
    toScreamingSnake('oneTwo'),
    'ONE_TWO'
  );
  assert.equal(
    toScreamingSnake('TwoThree'),
    'TWO_THREE'
  );
  assert.equal(
    toScreamingSnake('three-four'),
    'THREE_FOUR'
  );
  assert.equal(
    toScreamingSnake('four_five'),
    'FOUR_FIVE'
  );
  assert.equal(
    toScreamingSnake('FIVE_SIX'),
    'FIVE_SIX'
  );
  assert.end();
});

test(`toKebab works`, (assert) => {
  assert.equal(
    toKebab('zero'),
    'zero'
  );
  assert.equal(
    toKebab('ZEROOne'),
    'zero-one'
  );
  assert.equal(
    toKebab('oneTwo'),
    'one-two'
  );
  assert.equal(
    toKebab('TwoThree'),
    'two-three'
  );
  assert.equal(
    toKebab('three-four'),
    'three-four'
  );
  assert.equal(
    toKebab('four_five'),
    'four-five'
  );
  assert.equal(
    toKebab('FIVE_SIX'),
    'five-six'
  );
  assert.end();
});

test(`toCamel works`, (assert) => {
  assert.equal(
    toCamel('zero'),
    'zero'
  );
  assert.equal(
    toCamel('ZEROOne'),
    'zeroOne'
  );
  assert.equal(
    toCamel('oneTwo'),
    'oneTwo'
  );
  assert.equal(
    toCamel('TwoThree'),
    'twoThree'
  );
  assert.equal(
    toCamel('three-four'),
    'threeFour'
  );
  assert.equal(
    toCamel('four_five'),
    'fourFive'
  );
  assert.equal(
    toCamel('FIVE_SIX'),
    'fiveSix'
  );
  assert.end();
});

test(`toUpperCamel works`, (assert) => {
  assert.equal(
    toUpperCamel('zero'),
    'Zero'
  );
  assert.equal(
    toUpperCamel('ZEROOne'),
    'ZeroOne'
  );
  assert.equal(
    toUpperCamel('oneTwo'),
    'OneTwo'
  );
  assert.equal(
    toUpperCamel('TwoThree'),
    'TwoThree'
  );
  assert.equal(
    toUpperCamel('three-four'),
    'ThreeFour'
  );
  assert.equal(
    toUpperCamel('four_five'),
    'FourFive'
  );
  assert.equal(
    toUpperCamel('FIVE_SIX'),
    'FiveSix'
  );
  assert.end();
});
