import UserReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './UserSlice';

describe('User reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(UserReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = UserReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = UserReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = UserReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
