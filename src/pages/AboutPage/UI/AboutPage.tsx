import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('pages/about')

    return (
        <div>
            <h1>{t('Title')}</h1>
            <p>{t('Body')}</p>
        </div>
    );
};

export default AboutPage;