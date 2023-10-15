export const getThemeType = () => {
    const theme = {
        defaultValue: 'regular',
        toolbar: {
            items: [
                { value: 'regular', icon: 'circlehollow', title: 'Regular Theme' },
                { value: 'dark', icon: 'circle', title: 'Dark Theme' },
            ],
            dynamicTitle: true,
        },
    }
    return theme;
}
