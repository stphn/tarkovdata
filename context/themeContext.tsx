import React, { useEffect, useState } from 'react'

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
})

export default ThemeContext

export function ThemeProvider(props: { children: any }) {
    // keeps state of the current theme
    const [dark, setDark] = useState(false)

    // paints the app before it renders elements
    useEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme')

        if (lastTheme === 'true') {
            setDark(true)
            applyTheme(darkTheme)
        } else {
            setDark(false)
            applyTheme(lightTheme)
        }
    }, [dark])

    // rewrites set of css variablels/colors
    const applyTheme = (theme: any[]) => {
        const root = document.getElementsByTagName('html')[0]
        root.style.cssText = theme.join(';')
    }

    const toggle = () => {
        const body = document.getElementsByTagName('body')[0]
        body.style.cssText = 'transition: background .5s ease'

        setDark(!dark)
        window.localStorage.setItem('darkTheme', JSON.stringify(!dark))
    }

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggle,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

// styles
const lightTheme = [
    '--primary: #6750a4',
    '--primary-container: #eaddff',
    '--secondary: #625b71',
    '--secondary-container: #e8def8',
    '--tertiary: #7d5260',
    '--tertiary-container: #ffd8e4',
    '--surface: #fffbfe' /* 1dp elevation surface overlay */,
    '--surface-variant: #e7e0ec' /* 1dp elevation surface overlay */,
    '--background: #fff' /* 0dp elevation surface overlay */,
    '--error: #b3261e',
    '--error-container: #f9dedc',
    '--on-primary: #ffffff',
    '--on-primary-container: #21005e',
    '--on-secondary: #ffffff',
    '--on-secondary-container: #1e192b',
    '--on-tertiary: #ffffff',
    '--on-tertiary-container: #370b1e',

    '--on-surface: #fff',
    '--on-surface-variant: #49454e',
    '--on-error: #ffffff',
    '--on-error-container: #370b1e',
    '--on-background: #fff',
    '--outline: #79747e',
    '--shadow: #000',
    '--surface-tint-color: #000',
    '--inverse-surface: #313033',
    '--inverse-on-surface: #f4eff4',
    '--inverse-primary: #d0bcff',
]

const darkTheme = [
    '--primary: #D0BCFF',
    '--primary-container: #4F378B',
    '--secondary: #CCC2DC',
    '--secondary-container: #4A4458',
    '--tertiary: #EFB8C8',
    '--tertiary-container: #633B48',
    '--surface: #1C1B1F' /* 1dp elevation surface overlay */,
    '--surface-variant: #49454F' /* 1dp elevation surface overlay */,
    '--background: #1C1B1F' /* 0dp elevation surface overlay */,
    '--error: #F2B8B5',
    '--error-container: #8C1D18',
    '--on-primary: #371E73',
    '--on-primary-container: #EADDFF',
    '--on-secondary: #332D41',
    '--on-secondary-container: #E8DEF8',
    '--on-tertiary: #492532',
    '--on-tertiary-container: #FFD8E4',
    '--on-surface: #E6E1E5',
    '--on-surface-variant: #CAC4D0',
    '--on-error: #601410',
    '--on-error-container: #F9DEDC',
    '--on-background: #E6E1E5',
    '--outline: #938F99',
    '--shadow: #000',
    '--surface-tint-color: #D0BCFF',
    '--inverse-surface: #E6E1E5',
    '--inverse-on-surface: #313033',
    '--inverse-primary: #6750A4',
]
