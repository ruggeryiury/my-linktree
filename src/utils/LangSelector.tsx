const LangSelector = (nav_lang: string): string => {
    if (nav_lang.includes('pt-') || nav_lang === 'pt') {
        return 'PT'
    } else if (nav_lang.includes('en-') || nav_lang === 'en') {
        return 'EN'
    } else if (nav_lang.includes('es-') || nav_lang === 'es') {
        return 'ES'
    } else {
        return 'EN'
    }
}
 
export default LangSelector;