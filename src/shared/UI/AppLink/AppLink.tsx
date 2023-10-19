import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const APP_LINK_THEME = {
    CLEAR_INVERSED: 'clear-inversed',
    CLEAR_INVERSED_UNDERLINED: 'clear-inversed-underlined',
} as const;

export type AppLinkTheme = ObjectValues<typeof APP_LINK_THEME>;

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = 'clear-inversed', ...otherProps} = props;

    return (
        <Link
            to={to}
            className={classNames(cls[theme], {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
