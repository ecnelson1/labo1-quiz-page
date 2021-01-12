// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countAsYes } from './utils.js';

const test = QUnit.test;

test('This should return true for any Y begining answer', (expect) => {
    const word = 'no';
    const expected = false;
    const actual = countAsYes(word);
    expect.equal(actual, expected);
});
