import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface RenderComponentOptions {
    route?: string
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
    const {
        route = '/',
    } = options;

    return render(
        <I18nextProvider i18n={i18n}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </I18nextProvider>,
    );
};
