import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/UI/Sidebar';

describe('Test Sidebar widget component', () => {
    test('Basic render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
