import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCutomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente por defecto', () => {


        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCutomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();

        screen.debug();
    });

    test('debe mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Silvi', quote: 'Holis'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCutomHooks />);
        // screen.debug();
        expect(screen.getByText('Holis')).toBeTruthy();
        expect(screen.getByText('Silvi')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Silvi', quote: 'Holis'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCutomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

});