import { expect } from 'chai';

import todoApp from '../app/js/reducers';

function initialState() {
  return todoApp(undefined, {type: 'NOOP'});
}

describe('state', () => {
  describe('default state', () => {
    it('should contain todos', () => {
      let state = initialState();
      expect(state).to.have.property('todos');
    }),
    it('should contain a filter', () => {
      let state = initialState();
      expect(state).to.have.property('visibilityFilter');
    })
  })
});
