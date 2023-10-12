import { fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/UI/Sidebar';

describe('Test Sidebar widget component', () => {
    test('Basic render', () => {
        const { container } = renderWithTranslation(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        expect(sidebar).toBeInTheDocument();
    });

    test('To be collapsed on first render', () => {
        const { container } = renderWithTranslation(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        expect(sidebar).toHaveClass('collapsed');
    });

    test('Sidebar oppening (button toggle)', () => {
        const { container } = renderWithTranslation(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        const [toggleButton] = container.getElementsByClassName('arrow-button');
        fireEvent.click(toggleButton);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
