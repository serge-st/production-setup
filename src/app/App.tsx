import './styles/index.scss';
import { FC } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/UI/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

export const App: FC = () => {
    const {theme} = useTheme();

    // !! JUST FOR TESTING PURPOSES
    console.log(Math.random(), 'App render')

    const { t, i18n } = useTranslation('pages/about');

    const toggleLanguage = () => {
        const lng = i18n.language === 'en' ? 'ru' : 'en';
      i18n.changeLanguage(lng);
    };

    function MyComponent() {
        return (
          <div>
            <button onClick={() => toggleLanguage()}>Change</button>
            {t('title')}
          </div>
        );
    }

    return (
        <div className={classNames('App', {}, [theme])}>
            <MyComponent />
            <Navbar />
            <div className='main-content-wrapper'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
