import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('pages/main');

    return (
        <div>
            <h1>{t('Title')}</h1>
            <p style={{color: 'var(--secondary-color)'}}>{t('Body')}</p>
            <br />
            <Counter />
        </div>
    );
};

export default MainPage;
