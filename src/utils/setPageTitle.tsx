/**
 * **Function that place any given string on the page title.**
 * @param page_title {string} *The string for the page title.*
 */
const setPageTitle = (page_title: string): void => {
    document.title = page_title
}

export default setPageTitle