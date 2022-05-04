/**
 * @jest-environment jsdom
 */

import { countMock, countTest } from './counterMock.js';

describe('Add meals', () => {
  test('Add a new meal', () => {
    expect(countMock(3, 'meal').length).toBe(3);
  });

  test('Count meals', () => {
    const mealsArr = [
      {
        id: '1',
        name: 'chicken',
      },
      {
        id: '2',
        name: 'meat',
      },
      {
        id: '3',
        name: 'rice',
      },
    ];
    expect(countTest(mealsArr).length).toBe(3);
  });
});
