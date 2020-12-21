import { useContext } from 'react'

import LangContext from 'context/Lang'

// files with translations
import pl from 'translations/pl.json'
import en from 'translations/en.json'

// lang file schema
type langFile = {
    [key: string]: {
        [key: string]: string
    }
}

// hook
function useTranslation(): (value: string, type?: string) => string {

    const { lang } = useContext(LangContext)

    // choose correct translation file
    let translations: langFile

    switch(lang) {
        case 'pl':
            translations = pl
            break
        default:
            translations = en
            break
    }

    // return function that returning string in correct language
    return (val: string, type = 'ui') => {
        let string: string

        try {
            string = translations[type][val]
        } catch(e) {
            // if err then return 'null'
            string = 'null'
        }

        return string
    }
}

export default useTranslation