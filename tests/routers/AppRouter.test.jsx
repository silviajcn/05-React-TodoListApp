import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../src/routers/AppRouter';


describe('Pruebas en <AppRouter />', () => {

    test('debe mostrar el TodoApp', () => {

        render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        );

        expect(screen.getByText('My ToDo App')).toBeTruthy();
        // screen.debug();

    });

    test('debe mostrar el Home', () => {

        render(
            <MemoryRouter initialEntries={['/hooks']}>
                <AppRouter />
            </MemoryRouter>
        );

        expect(screen.getByText('Hooks App')).toBeTruthy();
        // screen.debug();

    });
});