import { FC, Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useAppDispatch, useTheme } from 'shared/lib';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { PageWrapper } from 'pages/PageWrapper';
import { userActions } from 'entities/User';

export const App: FC = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);
    
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
