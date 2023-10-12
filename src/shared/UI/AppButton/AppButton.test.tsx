import {render, screen} from '@testing-library/react';
import { AppButton } from './AppButton';

describe('Test AppButton UI component', () => {
    test('Basic render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
