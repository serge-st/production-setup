import './styles/index.scss';
import { FC, Suspense, useState } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageWrapper } from 'pages/PageWrapper';
import { AppButton, Modal } from 'shared/UI';

export const App: FC = () => {
    const {theme} = useTheme();

    const [testIsOpen, setTestIsOpen] = useState(false);
    
    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <Modal isOpened={testIsOpen} onClose={() => setTestIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore labore qui quos officiis voluptatibus possimus excepturi consequuntur exercitationem dicta adipisci sequi, recusandae dignissimos ratione harum illum eaque dolores asperiores.
                </Modal>
                <AppButton onClick={() => setTestIsOpen(true)}>Test open modal</AppButton>
                <div className='main-content-wrapper'>
                    <Sidebar />
                    <PageWrapper>
                        <AppRouter />
                    </PageWrapper>
                </div>
            </Suspense>
        </div>
    );
};
