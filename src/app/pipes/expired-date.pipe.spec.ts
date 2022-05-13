import { ExpiredDatePipe } from './expired-date.pipe';

describe('ExpiredDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ExpiredDatePipe();
    expect(pipe).toBeTruthy();
  });
});
