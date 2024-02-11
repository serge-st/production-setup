import { FC, Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { USER_ACCESS_TOKEN, classNames, useAppDispatch, useTheme } from 'shared/lib';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { PageWrapper } from 'pages/PageWrapper';
import { userActions } from 'entities/User';

export const App: FC = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userDataString = localStorage.getItem(USER_ACCESS_TOKEN);
        const userData = JSON.parse(userDataString ?? '{}');
        dispatch(userActions.setUserData(userData));
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
