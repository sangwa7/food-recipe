/**
 * @jest-environment jsdom
 */
import { Mock, comTest } from './commentMock.js';

describe('Add Comments', () => {
  test('Add a new comment', () => {
    expect(Mock(2, 'userName', 'comment').length).toBe(3);
  });

  test('Count comments', () => {
    const commentsArr = [
      {
        id: '1',
        name: 'Lekan',
        userComment: 'new Comment',
      },
      {
        id: '2',
        name: 'Didier',
        userComment: 'new Comment',
      },
    ];
    expect(comTest(commentsArr).length).toBe(2);
  });
});
