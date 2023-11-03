import { FC, Suspense } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { PageWrapper } from 'pages/PageWrapper';

export const App: FC = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback=''>
                <Header />
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
