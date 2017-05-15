import visApp from '../../src/vis_app';

describe('visApp', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(visApp, 'greet');
      visApp.greet();
    });

    it('should have been run once', () => {
      expect(visApp.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(visApp.greet).to.have.always.returned('hello');
    });
  });
  describe('Repeat function', () => {
    it('should repeat string', () => {
      expect(visApp.repeat('hi ', 3)).to.equal('hi hi hi ');
    });
  })
});
