export const getThemeType = () => {
    const theme = {
        defaultValue: 'regular-theme',
        toolbar: {
            items: [
                { value: 'regular-theme', icon: 'circlehollow', title: 'Regular Theme' },
                { value: 'dark-theme', icon: 'circle', title: 'Dark Theme' },
            ],
            dynamicTitle: true,
        },
    }
    return theme;
}
