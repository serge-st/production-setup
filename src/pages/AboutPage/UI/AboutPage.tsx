import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/UI';

const AboutPage: FC = () => {
    const { t } = useTranslation('pages/about');

    return (
        <div>
            <Text title={t('Title')} body={t('Body')} headerType='h1'/>
        </div>
    );
};

export default AboutPage;
