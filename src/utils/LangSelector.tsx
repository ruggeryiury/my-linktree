const LangSelector = (nav_lang: string): string => {
    if (nav_lang.includes('pt-')) {
        return 'PT'
    } else if (nav_lang.includes('en-')) {
        return 'EN'
    } else {
        return 'EN'
    }
}
 
export default LangSelector;