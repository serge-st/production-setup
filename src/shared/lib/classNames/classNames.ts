type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods = {}, additionalClasses: string[] = []): string {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_key, value]) => Boolean(value))
            .map(([key]) => key),
    ].join(' ');
}
