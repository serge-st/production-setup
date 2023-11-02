import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppButton, Modal } from 'shared/UI';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <AppButton theme={'clear-inversed'} onClick={() => setIsAuthModalOpen(true)}>{t('Login')}</AppButton>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpened={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore labore qui quos officiis voluptatibus possimus excepturi consequuntur exercitationem dicta adipisci sequi, recusandae dignissimos ratione harum illum eaque dolores asperiores.
            </Modal>
        </nav>
    );
};
