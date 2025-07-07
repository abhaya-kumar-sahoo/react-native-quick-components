import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle, useAppState, useDebounce, useThrottle } from '../../hooks';

describe('Custom State Hooks', () => {
  test('useToggle should toggle correctly', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].on();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].off();
    });
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true);
  });
});

describe('useAppState', () => {
  it('should return current app state and listen for changes', () => {
    const { result } = renderHook(() => useAppState());

    expect(result.current).toBe('active');
  });
});

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should debounce value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'init', delay: 500 },
      }
    );

    expect(result.current).toBe('init');

    rerender({ value: 'updated', delay: 500 });
    expect(result.current).toBe('init');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });
});

jest.useFakeTimers();

describe('useThrottle', () => {
  it('should throttle value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, limit }) => useThrottle(value, limit),
      {
        initialProps: { value: 'first', limit: 1000 },
      }
    );

    expect(result.current).toBe('first');

    rerender({ value: 'second', limit: 1000 });
    expect(result.current).toBe('first');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe('second');
  });
});
