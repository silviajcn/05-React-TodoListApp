import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter', () => {

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('debe incrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;

        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(11);

    });

    test('debe decrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(9);

    });

    test('debe realizar el reset', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(10);

    });

});