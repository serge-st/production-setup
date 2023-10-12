import {render, screen} from '@testing-library/react';
import { AppButton } from 'shared/UI/AppButton/AppButton';

describe('Test AppButton UI component', () => {
    test('Basic render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Default class is applied', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    test('Inversed theme class is applied', () => {
        render(<AppButton theme='clear-inversed'>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear-inversed');
    });

    test('Component attributes are applied', () => {
        render(<AppButton type='submit'>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveAttribute('type', 'submit');
    });
});
