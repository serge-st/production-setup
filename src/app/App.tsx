import './styles/index.scss';
import { FC, Suspense } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageWrapper } from 'widgets/PageWrapper';

export const App: FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
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
