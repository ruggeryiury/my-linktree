export interface ReactComponentWithLang {
    lang: string
}

export interface ReactComponentWithType {
    type: string
}

export interface ReactComponentWithLangAndType {
    lang: string
    type: string
}

export interface ReactComponentWithLangAndBooleanAction {
    lang: string
    action: React.Dispatch<React.SetStateAction<boolean>>
}