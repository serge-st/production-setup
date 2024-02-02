import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppText } from 'shared/UI';

const AboutPage: FC = () => {
    const { t } = useTranslation('pages/about');

    return (
        <div>
            <AppText title={t('Title')} body={t('Body')} headerType='h1' />
        </div>
    );
};

export default AboutPage;
