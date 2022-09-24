export interface Language {
    code: string,
    name: string,
    country_code: string
}

export const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        country_code: 'US'
    },
    {
        code: 'es',
        name: 'Spanish',
        country_code: 'ES'
    },
    {
        code: 'fr',
        name: 'French',
        country_code: 'FR'
    }
]