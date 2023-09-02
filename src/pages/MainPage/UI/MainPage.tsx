import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('pages/main')

    return (
        <div>
            <h1>{t('Title')}</h1>
            <p>{t('Body')}</p>
        </div>
    );
};

export default MainPage;