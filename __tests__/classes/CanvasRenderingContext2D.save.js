let canvas;
let ctx;

beforeEach(() => {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 300;
});

describe('save', () => {
  it('should be a function', () => {
    expect(typeof ctx.save).toBe('function');
  });

  it('should be callable', () => {
    ctx.save();
    expect(ctx.save).toBeCalled();
  });
});
