import { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export function RouterDecorator () {
    return (Story: StoryFn) => (
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="*" element={<Story />}/>
            </Routes>
        </MemoryRouter>
    );
}
