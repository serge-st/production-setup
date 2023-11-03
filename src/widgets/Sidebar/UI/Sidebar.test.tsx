import { fireEvent } from '@testing-library/react';
import { renderComponent } from 'shared/lib/renderComponent';
import { Sidebar } from 'widgets/Sidebar/UI/Sidebar';

describe('Test Sidebar widget component', () => {
    test('Basic render', () => {
        const { container } = renderComponent(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        expect(sidebar).toBeInTheDocument();
    });

    test('To be collapsed on first render', () => {
        const { container } = renderComponent(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        expect(sidebar).toHaveClass('collapsed');
    });

    test('Sidebar oppening (button toggle)', () => {
        const { container } = renderComponent(<Sidebar />);
        const [sidebar] = container.getElementsByClassName('Sidebar');
        const [toggleButton] = container.getElementsByClassName('arrow-button');
        fireEvent.click(toggleButton);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
